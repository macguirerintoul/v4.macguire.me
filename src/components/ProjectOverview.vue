<template>
  <div>
  <section class="project-overview">
    <h1 class="project-overview__title">{{ project.title }}</h1>
      <div class="project-overview__subtitle">
				<span>{{project.tags.join(', ')}} — {{ project.year }}</span>
      </div>
    <p class="project-overview__summary" v-html="project.summary" />

    <div class="project-overview__image">
      <MagicImage
        :path="project.imagePath"
        :alt="'Screenshot of ' + project.title"
      />
    </div>
      <div>
        <h4>For</h4>
        <span>{{ project.for }}</span>
      </div>
      <div>
        <h4>Roles</h4>
        <span>{{ project.roles.join(', ') }}</span>
      </div>
      <div>
        <h4>Tools</h4>
        <span>{{ project.tools.join(', ') }}</span>
      </div>
      <div>
        <h4>Interested?</h4>
        <span v-html="project.interested"></span>
      </div>
  </section>
    </div>
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
