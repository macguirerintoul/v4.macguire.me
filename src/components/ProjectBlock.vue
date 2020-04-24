<template>
  <g-link :class="['project-block', project.title]" :to="project.path">
      <h2 class="project-block--title">{{ project.title }}</h2>
      <p class="project-block__description">{{ project.shortDescription }}</p>
			<div class="project-block__context">
			<small class="project-block__year">{{ project.year }}</small>
      <small class="project-block__tags">{{ project.tags.join(', ') }}</small>
			</div>
      <MagicImage
				class="project-block__image"
        :path="project.imagePath"
        :alt="'Screenshot of ' + project.title"
      />
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
