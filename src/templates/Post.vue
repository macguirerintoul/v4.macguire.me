<template>
	<article>
		<div class="content">
			<h1>{{ $page.post.title }}</h1>
			<p>{{ toDateString($page.post.date) }}</p>
			<VueRemarkContent />
		</div>
	</article>
</template>

<script>
import { toDateString } from "../utilities";
import mediumZoom from "medium-zoom";

export default {
	methods: {
		toDateString,
		attachMediumZoom() {
			const images = [
				...document.querySelectorAll(".g-image"),
				...document.querySelectorAll(".magic-image img")
			];
			mediumZoom(images, { background: "#000" });
		}
	},
	updated() {
		console.log("Post updated");
		this.attachMediumZoom();
	},
	metaInfo() {
		return {
			title: this.$page.post.title,
			script: [{ src: "https://player.vimeo.com/api/player.js" }]
		};
	}
};
</script>

<page-query>
query Post($id: ID!) {
  post: post(id: $id) {
    title
    content
    date
  }
}
</page-query>
