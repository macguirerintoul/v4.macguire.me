<template>
	<footer class="container">
		<!-- <div class="featured-block-container">
			<FeaturedBlock type="randomStar" />
			<FeaturedBlock type="lastCommit" />
			<FeaturedBlock type="pick" />
		</div>
		<hr /> -->
 
		<p class="footer__copyright">
			© {{ currentYear }} Macguire Rintoul. All rights reserved.
		</p> 
		<div>
			<h4>Services</h4>
			<ul class="util-unstyled-list footer__links">
				<li>Experience Design</li>
				<li>Software Development</li>
				<li>System Administration</li>
			</ul>
		</div>
		<div>
			<h4>Links</h4>
			<ul class="util-unstyled-list footer__links">
				<li>
					<MagicLink
						class="footer__link"
						url="https://github.com/macguirerintoul/"
					>
						GitHub
					</MagicLink>
				</li>
				<li>
					<MagicLink
						class="footer__link"
						url="https://linkedin.com/in/macguirerintoul/"
					>
						LinkedIn
					</MagicLink>
				</li>
			</ul>
		</div>

	</footer>
</template>

<script>
// import FeaturedBlock from "~/components/FeaturedBlock";
import MagicLink from "~/components/MagicLink";

export default {
	components: {
		FeaturedBlock,
		MagicLink
	},
	data() {
		return { currentYear: new Date().getFullYear() };
	},
	computed: {
		infoBlockStatus: function() {
			return "info-block--" + this.subscriptionStatus;
		}
	},
	methods: {
		updateSubscriptionStatus(data) {
			if (!data.error) {
				this.subscriptionStatus = "success";
				this.subscriptionMessage = "Successfully subscribed.";
			} else {
				this.subscriptionStatus = "error";
				this.subscriptionMessage = data.error;
			}
		},
		addSubsriber() {
			console.log("Attempting to add subscriber...");
			try {
				fetch("https://api.macguire.me/api/add-subscriber", {
					method: "post",
					body: JSON.stringify({ email: this.email })
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log("Subscription attempt finished", data);
						this.updateSubscriptionStatus(data);
					});
			} catch (error) {
				console.error(error);
				this.subscriptionStatus == error;
			}
		}
	}
};
</script>
