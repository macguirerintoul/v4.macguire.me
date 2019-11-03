<template>
  <g-link :class="['project-block', project.title]" :to="project.path">
    <div :style="'height: 300px;background: url(https://res.cloudinary.com/macguire/image/upload/c_scale,h_600,dpr_auto,f_auto,q_auto:low/' +  project.imagePath + '.jpg) no-repeat center center/cover; }'">
    </div>
    <div class="project-block__content">
      <h3 class="project-block--title">{{ project.title }}</h3>
      <div class="project-block__tags">
        <small
          v-for="tag in project.tags"
          :key="tag"
          class="commas"
          >{{ tag }}</small>
      </div>
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
