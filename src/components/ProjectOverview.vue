<template>
  <div>
  <section class="project-overview">
    <h1 class="project-overview__title">{{ project.title }}</h1>
      <div class="project-overview__subtitle">
				<span class="commas" v-for="tag in project.tags" :key="tag">{{tag}}</span><span>— {{ project.year }}</span>
      </div>
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
        <h4>Roles</h4>
        <span class="commas" v-for="role in project.roles" :key="role">{{ role }}</span>
      </div>
      <div>
        <h4>Tools</h4>
        <span class="commas" v-for="tool in project.tools" :key="tool">{{ tool }}</span>
      </div>
      <div>
        <h4>Interested?</h4>
        <span v-html="project.interested"></span>
      </div>
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
