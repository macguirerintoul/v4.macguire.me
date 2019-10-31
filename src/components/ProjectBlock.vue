<template>
  <g-link :class="['project-block', project.title]" :to="project.path">
    <CldImage
      class="img-zooming"
      dpr="auto"
      height="400"
      crop="scale"
      :alt="project.title"
      :public-id="project.imagePath"
    >
      <CldTransformation quality="auto" fetch-format="auto" />
    </CldImage>
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
import { CldImage, CldTransformation } from "cloudinary-vue";
export default {
  components: {
    CldImage,
    CldTransformation
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
