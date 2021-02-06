<template>
<div>
    <TOC :headings="headings" />
		<ProjectOverview :project="$page.project" />
		<div class="content">
			<VueRemarkContent />
		</div>
		<PreviousNext type="project" :previous="previous" :next="next" />
	</div>
</template>

<script>
import { attachMediumZoom } from "../utilities";
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
		return { next: { title: "", path: "" }, previous: { title: "", path: "" }, headings: [] };
  },
	updated() {
		console.log("Project template updated");
		this.previous = this.$page.allProject.edges.filter(
			item => item.node.title === this.$page.project.title
		)[0].previous;
		this.next = this.$page.allProject.edges.filter(
			item => item.node.title === this.$page.project.title
		)[0].next;
    attachMediumZoom();
    if (this.headings.length == 0) {
      console.log('headings empty')
      let headings = document.querySelectorAll('h2,h3')
      console.log(headings)
      this.headings = Array.from(headings)
    }
   
    
	},
	metaInfo() {
		return {
			title: this.$page.project.title, // Set the <title> to that of the project
			script: [{ src: "https://player.vimeo.com/api/player.js" }] // Load the Vimeo embedded player code
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
