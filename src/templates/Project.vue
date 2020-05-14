<template>
	<div class="content">
		<ProjectOverview :project="$page.project" />
		<VueRemarkContent />
	</div>
</template>

<page-query>
query Project($id: ID!) {
  project: project(id: $id) {
    title
    roles
    tools
		interested
		tags
		for
    url
    year
    summary
    content
    imagePath
  }
}
</page-query>

<script>
import ProjectOverview from "~/components/ProjectOverview";
import mediumZoom from "medium-zoom";

export default {
	components: {
		ProjectOverview
	},
	methods: {
		attachMediumZoom() {
			const images = [
				...document.querySelectorAll(".g-image"),
				...document.querySelectorAll(".magic-image img")
			];
			mediumZoom(images, { background: "#000" });
		}
	},
	updated() {
		console.log("Project updated");
		this.attachMediumZoom();
	},
	metaInfo() {
		return {
			title: this.$page.project.title, // Set the <title> to that of the project
			script: [{ src: "https://player.vimeo.com/api/player.js" }] // Load the Vimeo embedded player code
		};
	}
};
</script>
