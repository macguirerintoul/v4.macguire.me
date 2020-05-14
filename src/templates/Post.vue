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
import { toDateString, attachMediumZoom } from "../utilities";

export default {
	methods: {
		toDateString
	},
	updated() {
		console.log("Post updated");
		attachMediumZoom();
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
