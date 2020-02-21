<template>
  <g-link :class="['project-block', project.title]" :to="project.path">
    <div class="project-block__content">
      <h2 class="project-block--title">{{ project.title }}</h2>
        <small class="project-block__tags">{{ project.tags.join(', ') }}</small>
      <p class="project-block__description">{{ project.shortDescription }}</p>
    </div>
    </div>
  </g-link>
</template>

<script>
import { CldImage, CldTransformation } from 'cloudinary-vue'

export default {
  components: {
    CldImage,
    CldTransformation,
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
