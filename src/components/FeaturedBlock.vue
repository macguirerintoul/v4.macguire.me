<template>
	<div class="featured-block">
		<MagicLink class="featured-block__name" :url="seeAll">
			{{ blockName }}
		</MagicLink>
		<MagicLink class="featured-block__content" :url="url">
			<h4 class="featured-block__item-title">
				<code v-if="sha.length > 0">{{ sha }}</code>
				{{ itemTitle }}
			</h4>

			<p class="featured-block__text">
				{{ text }}
			</p>
		</MagicLink>
	</div>
</template>

<script>
import { truncateOnWord } from "~/utilities";

import MagicLink from "~/components/MagicLink";
import picks from "../../content/picks.yaml";

export default {
	components: {
		MagicLink
	},
	props: {
		type: { type: String, default: "" }
	},
	data() {
		return {
			blockName: "",
			itemTitle: "",
			text: "",
			sha: "",
			url: "",
			seeAll: "",
			picks
		};
	},
	mounted() {
		if (this.type === "randomStar") {
			this.getRandomStar();
		} else if (this.type === "lastCommit") {
			this.getLastCommit();
		} else if (this.type === "pick") {
			this.getPick();
		}
	},
	methods: {
		async getPick() {
			// Choose a Pick at random from the array
			const pick = this.picks[Math.floor(Math.random() * this.picks.length)];
			// Store the Pick in state
			this.blockName = "Picks";
			this.itemTitle = pick.title;
			this.text = pick.description;
			this.url = pick.url;
			this.seeAll = "/picks";
		},
		getLastCommit() {
			fetch("https://api.github.com/users/macguirerintoul/events")
				.then(response => response.json())
				.then(data => {
					const pushEvents = data.filter(event => {
						// Filter for events where I pushed commits
						return event.type === "PushEvent";
					});
					const latestPush = pushEvents[0]; // Pick the latest push event
					const latestCommit = latestPush.payload.commits[0]; // Pick the latest commit in the push
					this.blockName = "Commits";
					this.seeAll = "https://gitstalk.netlify.com/macguirerintoul";
					// Prevents long commit messages from breaking the block
					let cm = latestCommit.message;
					this.text = cm.length > 100 ? truncateOnWord(cm, 100) : cm;
					this.sha = latestCommit.sha.substr(0, 6);
					this.itemTitle = " in " + latestPush.repo.name;
					this.url = `https://github.com/${latestPush.repo.name}`;
					this.commitURL = `https://github.com/${latestPush.repo.name}/${latestCommit.sha}`;
				});
		},
		getRandomStar() {
			fetch("https://api.github.com/users/macguirerintoul/starred")
				.then(response => response.json())
				.then(data => {
					const chosenStar = data[Math.floor(Math.random() * data.length)];
					this.blockName = "Stars";
					this.seeAll = "https://github.com/macguirerintoul?tab=stars";
					this.itemTitle =
						chosenStar.full_name +
						" — ＊" +
						chosenStar.stargazers_count.toString();

					this.text = chosenStar.description;
					this.url = chosenStar.html_url;
				});
		}
	}
};
</script>
