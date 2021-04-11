<template>
	<DefaultLayout>
		<ProjectOverview :project="$page.project" />
		<div class="content">
			<TOC :headings="headings" />
			<VueRemarkContent class="content__main" />
		</div>
		<PreviousNext type="project" :previous="previous" :next="next" />
	</DefaultLayout>
</template>

<script>
import { attachMediumZoom, makeThumbnailQuery, getOGImage } from "../utilities";
import ProjectOverview from "~/components/ProjectOverview";
import PreviousNext from "~/components/PreviousNext";
import TOC from "~/components/TOC";

export default {
	components: {
		ProjectOverview,
		PreviousNext,
		TOC
	},
	data() {
		return {
			mediumZoom: null,
			next: { title: "", path: "" },
			previous: { title: "", path: "" },
			headingsProject: "",
			currentProject: "",
			headings: []
		};
	},
	computed: {
		thumbnailData() {
			return {
				title: this.$page.project.title,
				description: this.$page.project.description,
				imagePath: this.$page.project.imagePath,
			};
		},
	},
	methods: {
		getHeadings() {
			// Because this runs in updated, we need conditions or else this method will trigger another update which will call this method again, etc.
			if (
				this.headings.length === 0 ||
				this.headingsProject != this.currentProject
			) {
				let headings = document.querySelectorAll("h2,h3");
				this.headings = Array.from(headings);
				this.headingsProject = this.$page.project.title;
			}
		},
		createPreviousNext() {
			this.previous = this.$page.allProject.edges.filter(
				item => item.node.title === this.$page.project.title
			)[0].previous;
			this.next = this.$page.allProject.edges.filter(
				item => item.node.title === this.$page.project.title
			)[0].next;
		},
		preparePage() {
			this.currentProject = this.$page.project.title;
			this.getHeadings();
			try {
				this.mediumZoom.detach(); // We need to detach all images here, otherwise they'll have several instances added to them and they'll all pop up
			} catch {
				console.log("no mz exists");
			}
			this.mediumZoom = attachMediumZoom();
			this.createPreviousNext();
		}
	},
	mounted() {
		console.info("Project template mounted");
		this.preparePage();
	},
	updated() {
		console.info("Project template updated");
		this.preparePage();
	},
	metaInfo() {
		return {
			title: this.$page.project.title, // Set the <title> to that of the project
			script: [{ src: "https://player.vimeo.com/api/player.js" }], // Load the Vimeo embedded player code
			meta: [
				{ property: "og:image", content: getOGImage(makeThumbnailQuery(this.thumbnailData)) },
				{ property: "og:title", content: this.$page.project.title },
				{ property: "og:description", content: this.$page.project.description }
			]
		};
	}
};
</script>

<page-query>
	query Project($id: ID!) {
		project: project(id: $id) {
			title
			roles
			tools
			interested
      description
			tags
			for
			url
			year
			summary
			content
			imagePath
      headings {
          depth
          value
          anchor
        }
		}
		allProject(
			sortBy: "order"
			order: ASC
			filter: { featured: { eq: true }, published: { eq: true } }
		) {
			edges {
				previous {
					path
					title
				}
				node {
					title
				}
				next {
					path
					title
				}
			}
		}
	}
</page-query>
