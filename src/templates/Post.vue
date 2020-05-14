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
	data() {
		return { next: {}, previous: {} };
	},
	mounted() {
		// TODO handle null cases
		this.previous = this.$page.allPosts.edges.filter(
			item => item.node.title === this.$page.post.title
		)[0].previous;
		this.next = this.$page.allPosts.edges.filter(
			item => item.node.title === this.$page.post.title
		)[0].next;
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
query ($id: ID!) {
  post: post(id: $id) {
    title
    content
    date
  }
	allPosts: allPost {
    edges {
			previous {
				path
				title
			}
			node {
				title
			}
			next {
				path
				title
			}
		}
  }
}
</page-query>
