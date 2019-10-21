<template>
  <div class="featured-block">
    <span class="featured-block--name">{{ blockName }}</span>
    <MagicLink class="featured-block--see-all" :url="seeAll">
      <small>See all</small>
    </MagicLink>

    <MagicLink class="hvr-float" :url="url">
      <div class="featured-block__content">
        <span class="featured-block--item-title">
          {{ itemTitle }}
        </span>
        <small class="featured-block--context">
          {{ computeContext(contextOne) }}
        </small>

        <p class="featured-block--text">
          {{ text }}
        </p>

        <small class="featured-block--context">
          {{ computeContext(contextTwo) }}
        </small>
      </div>
    </MagicLink>
  </div>
</template>

<script>
import moment from "moment";

import MagicLink from "~/components/MagicLink.vue";
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
      url: "",
      seeAll: "",
      contextOne: {},
      contextTwo: {},
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
      console.log(this.picks);
      const pick = this.picks[Math.floor(Math.random() * this.picks.length)];
      // Store the Pick in state
      this.blockName = "Picks";
      this.itemTitle = pick.title;
      this.text = pick.description;
      this.url = pick.url;
      this.seeAll = "/picks";
      this.contextOne = { type: "timestamp", value: pick._createdAt };
    },
    getLastCommit() {
      fetch("https://api.github.com/users/macguirerintoul/events")
        .then(response => response.json())
        .then(data => {
          const pushEvents = data.filter(event => {
            return event.type === "PushEvent";
          });
          const latestPush = pushEvents[0];
          const latestCommit = latestPush.payload.commits[0];
          this.blockName = "Last commit";
          this.contextOne = {
            type: "hash",
            url: `https://github.com/${latestPush.repo.name}/commit/${
              latestCommit.sha
            }`,
            value: latestCommit.sha.substr(0, 6)
          };
          this.seeAll = "https://gitstalk.netlify.com/macguirerintoul";
          this.contextTwo = { type: "timestamp", value: latestPush.created_at };
          this.text = latestCommit.message;
          this.itemTitle = latestPush.repo.name;
          this.url = `https://github.com/${latestPush.repo.name}`;
          this.commitURL = `https://github.com/${latestPush.repo.name}/${
            latestCommit.sha
          }`;
        });
    },
    getRandomStar() {
      fetch("https://api.github.com/users/macguirerintoul/starred")
        .then(response => response.json())
        .then(data => {
          const chosenStar = data[Math.floor(Math.random() * data.length)];
          this.blockName = "Stars";
          this.seeAll = "https://github.com/macguirerintoul?tab=stars";
          this.itemTitle = chosenStar.full_name;
          this.contextOne = {
            type: "starCount",
            value: chosenStar.stargazers_count.toString()
          };
          this.text = chosenStar.description;
          this.url = chosenStar.html_url;
        });
    },
    computeContext(context) {
      if (context.type === "starCount") {
        return `★${context.value}`;
      } else if (context.type === "timestamp") {
        return moment(context.value).fromNow();
      } else {
        return context.value;
      }
    }
  }
};
</script>
