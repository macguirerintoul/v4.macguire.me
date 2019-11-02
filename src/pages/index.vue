<template>
  <div>
    <section class="hero">
      <p>Product design + web development consultant available for hire</p>
    </section>
    <section class="work animate-fade-in-up">
      <h1>Featured Work</h1>
      <div class="project-flex-container">
        <ProjectBlock
          v-for="edge in $page.featuredProjects.edges"
          :key="edge.node.id"
          :project="edge.node"
        />
      </div>
      <h2>Other projects</h2>
      <div class="other-projects__flex-container">
        <ul>
          <li
          v-for="edge in $page.otherProjects.edges"
          :key="edge.node.id">
            {{edge.node.title}}: {{edge.node.shortDescription}}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<page-query>
query AllProjects {
  featuredProjects: allProject(sortBy: "order", order: ASC, filter: {
    featured: { eq: true },
    published: { eq: true }
  }) {
    edges {
      node {
        id
        for
        title
        shortDescription
        tags
        imagePath
        path
      }
    }
  }
  otherProjects: allProject(filter: {
    featured: { eq: false },
    published: { eq: true }
  }) {
    edges {
      node {
        id
        title
        shortDescription
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
