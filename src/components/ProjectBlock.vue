<template>
  <g-link :class="['project-block', project.title]" :to="project.path">
    <div class="project-block--content">
      <small>{{ project.for }}</small>
      <h3 class="project-block--title">{{ project.title }}</h3>
      <p>{{ project.shortDescription }}</p>
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
export default {
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
