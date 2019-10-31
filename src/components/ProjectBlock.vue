<template>
  <g-link :class="['project-block', project.title]" :to="project.path">
    <MagicImage :path="project.imagePath" :alt="project.title" />
    <div class="project-block__content">
    <h3 class="project-block--title">{{ project.title }}</h3>
    <small
      v-for="tag in project.tags"
      :key="tag"
      class="project-block__tag"
      >{{ tag }}</small
    >
  </div>
  </g-link>
</template>

<script>
import MagicImage from "./MagicImage";
export default {
  components: {
    MagicImage
  },
  props: {
    project: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
