<template>
  <g-link :class="['project-block', project.title]" :to="project.path">
    <div class="project-block__content">
      <h2 class="project-block--title">{{ project.title }}</h2>
      <small class="project-block__tags">{{ project.tags.join(', ') }}</small>
      <p class="project-block__description">{{ project.shortDescription }}</p>

      <MagicImage
        :path="project.imagePath"
        :alt="'Screenshot of ' + project.title"
      />
    </div>
  </g-link>
</template>

<script>
import MagicImage from './MagicImage.vue'
import { CldImage, CldTransformation } from 'cloudinary-vue'

export default {
  components: {
    CldImage,
    CldTransformation,
		MagicImage,
  },
  props: {
    project: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
