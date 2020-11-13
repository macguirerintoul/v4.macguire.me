<template>
	<div>
		<p class="hero">
			I'm Macguire, an experience designer & software developer from Vancouver,
			BC. Currently, I'm working at
			<MagicLink url="http://www.visier.com/">Visier</MagicLink> as a User
			Experience Designer. Previously, I've worked at
			<MagicLink url="http://vch.ca/">Vancouver Coastal Health</MagicLink> and
			the <MagicLink url="http://clab.iat.sfu.ca/">Connections Lab</MagicLink>.
		</p>
		<hr />
		<section class="work">
			<h1>Selected work</h1>
			<div class="project-flex-container">
				<TDTBlock
					v-for="edge in $page.featuredProjects.edges"
					:key="edge.node.id"
					:node="edge.node"
				/>
			</div>
		</section>
	</div>
</template>

<page-query>
	query AllProjects {
		featuredProjects: allProject(
			sortBy: "order"
			order: ASC
			filter: { featured: { eq: true }, published: { eq: true } }
		) {
			edges {
				node {
					id
					for
					title
					description
					tags
					year
					imagePath
					path
				}
			}
		}
	}
</page-query>

<script>
import TDTBlock from "~/components/TDTBlock.vue";
import MagicLink from "~/components/MagicLink.vue";

export default {
	components: {
		TDTBlock,
		MagicLink
	},
	metaInfo() {
		return {
			title: "Work"
		};
	}
};
</script>
