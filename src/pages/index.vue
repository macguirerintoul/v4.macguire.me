<template>
  <div>
    <section class="hero">
      <p>Product design + web development consultant available for hire</p>
    </section>
    <section class="work animate-fade-in-up">
      <h1>Featured Work</h1>
      <div class="project-flex-container">
        <ProjectBlock
          v-for="edge in $page.projects.edges"
          :key="edge.node.id"
          :project="edge.node"
        />
      </div>
    </section>
  </div>
</template>

<page-query>
query AllProjects {
  projects: allProject {
    edges {
      node {
        id
        for
        title
        shortDescription
        featured
        tags
        imagePath
        path
      }
    }
  }
}
</page-query>

<script>
import ProjectBlock from "~/components/ProjectBlock.vue";

export default {
  components: {
    ProjectBlock
  },
  metaInfo: {
    title: "Work"
  }
};
</script>
