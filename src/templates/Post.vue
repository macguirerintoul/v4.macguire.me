<template>
	<DefaultLayout>
		<TOC :headings="this.$page.post.headings" />
		<article class="content">
			<h1>{{ $page.post.title }}</h1>
			<p>{{ toDateString($page.post.date) }}</p>
			<VueRemarkContent />
		</article>
		<PreviousNext type="post" :previous="previous" :next="next" />
	</DefaultLayout>
</template>

<script>
import { toDateString, attachMediumZoom } from "../utilities";
import PreviousNext from "~/components/PreviousNext";

import TOC from "~/components/TOC";
export default {
	components: {
		PreviousNext,
		TOC
	},
	data() {
		return {
			mediumZoom: null,
			next: { title: "", path: "" },
			previous: { title: "", path: "" },
			headings: []
		};
	},
	updated() {
		console.log("Post updated");
		this.previous = this.$page.allPosts.edges.filter(
			item => item.node.title === this.$page.post.title
		)[0].previous;
		this.next = this.$page.allPosts.edges.filter(
			item => item.node.title === this.$page.post.title
		)[0].next;
		try {
			this.mediumZoom.detach(); // We need to detach all images here, otherwise they'll have several instances added to them and they'll all pop up
		} catch {
			console.log("no mz exists");
		}
		this.mediumZoom = attachMediumZoom();
	},
	methods: {
		toDateString,
		getHeadings() {
			// Because this runs in updated, we need conditions or else this method will trigger another update which will call this method again, etc.
			if (this.headings.length === 0) {
				let headings = document.querySelectorAll("h2,h3");
				this.headings = Array.from(headings);
			}
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
query($id: ID!) {
	post: post(id: $id) {
		title
		content
		date
		headings {
			depth
			value
			anchor
		}
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
