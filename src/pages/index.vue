<template>
	<DefaultLayout>
		<div class="hero">
			<p class="hero-paragraph">What are you looking for today?</p>
			<p class="hero-links">
				<magic-link url="/services/experience-design"
					>Experience Design</magic-link
				>
				<Spacer />
				<magic-link url="/services/software-development"
					>Software Development</magic-link
				>
				<Spacer />
				<magic-link url="/services/system-administration"
					>System Administration</magic-link
				>
			</p>
		</div>

		<section class="work">
			<h1>Selected work</h1>

		<hr />
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

import Spacer from "~/components/Spacer";
import { getOGImage, makeThumbnailQuery } from "../utilities";

export default {
	components: {
		TDTBlock,
		MagicLink,
		Spacer
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
