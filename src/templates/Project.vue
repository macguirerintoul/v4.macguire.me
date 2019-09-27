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
    description
    content
    imagePath
  }
}
</page-query>

<script>
import ProjectOverview from "~/components/ProjectOverview";

export default {
  components: {
    ProjectOverview
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      script: [{ src: "https://player.vimeo.com/api/player.js" }]
    };
  }
};
</script>
