<template>
	<section>
		<h1>Blog</h1>
		<!-- List posts -->
		<table class="articles">
			<tr
				class="articles__row"
				v-for="edge in $page.posts.edges"
				:key="edge.node.id"
			>
				<td class="articles__title">
					<g-link :to="edge.node.path">
						{{ edge.node.title }}
					</g-link>
				</td>
				<td class="articles__updated">{{ updated(edge.node.date) }}</td>
			</tr>
		</table>
	</section>
</template>

<script>
import moment from "moment";

export default {
	metaInfo: {
		title: "Blog"
	},
	methods: {
		updated: function(string) {
			return moment(string).fromNow();
		}
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
