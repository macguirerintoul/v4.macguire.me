<template>
	<div>
		<h1>Blog</h1>
		<section class="blog-posts">
			<TDTBlock
				v-for="edge in $page.posts.edges"
				:key="edge.node.id"
				:node="edge.node"
			/>
		</section>
	</div>
</template>

<script>
import TDTBlock from "~/components/TDTBlock.vue";

export default {
	components: {
		TDTBlock
	},
	metaInfo: {
		title: "Blog"
	},
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
