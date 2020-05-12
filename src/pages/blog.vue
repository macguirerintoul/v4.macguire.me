<template>
	<section>
		<h1>Blog</h1>

		<div
			v-for="edge in $page.posts.edges"
			:key="edge.node.id"
			class="posts-table__row"
		>
			<g-link :to="edge.node.path">
				{{ edge.node.title }}
			</g-link>
			<p>{{ edge.node.excerpt }}</p>
		</div>
	</section>
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
				excerpt
      }
    }
  }
}
</page-query>
