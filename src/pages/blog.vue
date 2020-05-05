<template>
	<section>
		<h1>Blog</h1>
		<!-- List posts -->
		<table class="posts-table">
			<tr
				v-for="edge in $page.posts.edges"
				:key="edge.node.id"
				class="posts-table__row"
			>
				<td class="posts-table__title">
					<g-link :to="edge.node.path">
						{{ edge.node.title }}
					</g-link>
				</td>
				<td class="posts-table__updated">{{ toDateString(edge.node.date) }}</td>
			</tr>
		</table>
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
      }
    }
  }
}
</page-query>
