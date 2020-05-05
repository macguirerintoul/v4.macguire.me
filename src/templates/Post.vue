<template>
	<article>
		<div class="content">
			<h1>{{ $page.post.title }}</h1>
			<p>by Macguire Rintoul — {{ updated }}</p>
			<VueRemarkContent />
		</div>
	</article>
</template>

<script>
import moment from "moment";

export default {
	computed: {
		updated: function() {
			return moment(this.$page.post.date).fromNow();
		}
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
