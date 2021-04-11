<template>
	<DefaultLayout>
		<h1>Blog</h1>
		<section class="blog-posts">
			<BlogPost
				v-for="edge in $page.posts.edges"
				:key="edge.node.id"
				:node="edge.node"
			/>
		</section>
	</DefaultLayout>
</template>

<script>
import BlogPost from "~/components/BlogPost.vue";

export default {
	components: {
		BlogPost
	},
	metaInfo: {
		title: "Blog"
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
					tags
				}
			}
		}
	}
</page-query>
