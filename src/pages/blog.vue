<template>
	<div>
		<h1>Blog</h1>
		<section class="blog-posts">
			<TDTBlock
				v-for="edge in $page.posts.edges"
				:key="edge.node.id"
				:title="edge.node.title"
				:url="edge.node.path"
				:date="edge.node.date"
				:description="edge.node.description"
				class="blog-posts__post"
			/>
		</section>
	</div>
</template>

<script>
import { toDateString } from "../utilities";
import TDTBlock from "~/components/TDTBlock.vue";

export default {
	components: {
		TDTBlock
	},
	metaInfo: {
		title: "Blog"
	},
	methods: {
		toDateString
	}
};
</script>

<page-query>
	query AllPosts {
		posts: allPost {
			edges {
				node {
					title
					path
					date
					description
				}
			}
		}
	}
</page-query>
