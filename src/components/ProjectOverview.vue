<template>
  <section class="project-overview">
    <h1 class="project-overview__title">{{ project.title }}</h1>
    <div class="project-overview__summary">
      <p v-html="project.summary" />
      <div class="project-overview__context">
        <div>
          <h3>For</h3>
          <span>{{ project.for }}</span>
        </div>
        <div>
          <h3>Roles</h3>
          <ul>
            <li v-for="role in project.roles" :key="role">{{ role }}</li>
          </ul>
        </div>
        <div>
          <h3>Tools</h3>
          <ul>
            <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="project-overview__image">
      <MagicImage
        :path="project.imagePath"
        :alt="'Screenshot of ' + project.title"
      />
    </div>
    <MagicLink class="project-overview__url" :url="project.url">
      <small>{{ project.url }}</small>
    </MagicLink>
  </section>
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
      default() {
        return {};
      }
    }
  }
};
</script>
