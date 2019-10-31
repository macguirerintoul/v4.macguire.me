<template>
  <g-link :class="['project-block', project.title]" :to="project.path">
    <MagicImage :path="project.imagePath" :alt="project.title" />
    <div class="project-block__content">
    <h2 class="project-block--title">{{ project.title }}</h2>
    <p class="project-block__description">{{ project.shortDescription }}</p>
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
