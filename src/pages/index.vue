<template>
	<DefaultLayout>
		<div class="hero">
			<p class="hero-paragraph">What are you looking for today?</p>
			<p class="hero-links">
				<magic-link>Experience Design</magic-link> ✦
				<magic-link>Software Development</magic-link> ✦
				<magic-link>System Administration</magic-link>
			</p>
		</div>

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
	</DefaultLayout>
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
import { getOGImage, makeThumbnailQuery } from "../utilities";

export default {
	components: {
		TDTBlock,
		MagicLink
	},
	metaInfo() {
		return {
			title: "Home",
			meta: [
				{
					property: "og:image",
					content: getOGImage(makeThumbnailQuery(this.thumbnailData))
				}
			]
		};
	},
	data() {
		return {
			hero:
				"I'm Macguire — an experience designer, software developer, music producer, and IT consultant."
		};
	},
	computed: {
		thumbnailData() {
			return {
				title: "Macguire Rintoul",
				description: this.hero
			};
		}
	}
};
</script>
