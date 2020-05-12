<template>
	<div>
		<h1>Blog</h1>
		<section class="blog-posts">
			<div
				v-for="edge in $page.posts.edges"
				:key="edge.node.id"
				class="blog-posts__post"
			>
				<g-link :to="edge.node.path">
					<h2>{{ edge.node.title }}</h2>
				</g-link>
				<p>{{ edge.node.description }}</p>
				<small>{{ toDateString(edge.node.date) }}</small>
			</div>
		</section>
	</div>
</template>

<script>
import { toDateString } from "../utilities";

export default {
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
