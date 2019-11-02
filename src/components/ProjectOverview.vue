<template>
  <section class="project-overview">
    <h1 class="project-overview__title">{{ project.title }}</h1>
    <p class="project-overview__summary" v-html="project.summary" />

    <div class="project-overview__image">
      <MagicImage
        :path="project.imagePath"
        :alt="'Screenshot of ' + project.title"
      />
    </div>

    <div class="project-overview__context">
      <div>
        <h4>For</h4>
        <span>{{ project.for }}</span>
      </div>
      <div>
        <h4>Year</h4>
        <span>{{ project.year }}</span>
      </div>
      <div>
        <h4>Roles</h4>
        <ul>
          <li v-for="role in project.roles" :key="role">{{ role }}</li>
        </ul>
      </div>
      <div>
        <h4>Tools</h4>
        <ul>
          <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
import MagicImage from './MagicImage'
import MagicLink from './MagicLink'

export default {
  components: {
    MagicImage,
    MagicLink,
  },
  props: {
    project: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
