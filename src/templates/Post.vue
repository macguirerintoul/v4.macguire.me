<template>
	<div>
		<article class="content">
			<h1>{{ $page.post.title }}</h1>
			<p>{{ toDateString($page.post.date) }}</p>
			<VueRemarkContent />
		</article>
		<div class="previous-next">
			<div class="previous-next__previous">
				<g-link :to="previous.path" v-if="previous !== null">
					{{ previous.title }}
				</g-link>
			</div>
			<div class="previous-next__next">
				<g-link :to="next.path" v-if="next !== null">
					{{ next.title }}
				</g-link>
			</div>
		</div>
	</div>
</template>

<script>
import { toDateString, attachMediumZoom } from "../utilities";

export default {
	methods: {
		toDateString
	},
	data() {
		return { next: { title: "", path: "" }, previous: { title: "", path: "" } };
	},
	updated() {
		console.log("Post updated");
		// TODO handle null cases
		this.previous = this.$page.allPosts.edges.filter(
			item => item.node.title === this.$page.post.title
		)[0].previous;
		this.next = this.$page.allPosts.edges.filter(
			item => item.node.title === this.$page.post.title
		)[0].next;
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
