<template>
  <section class="project-context">
    <div>
      <h3>For</h3>
      <!-- eslint-disable-next-line -->
      <p>{{ client }}</p>
    </div>
    <div>
      <h3>Roles</h3>
      <ul>
        <li v-for="role in roles" :key="role">{{ role }}</li>
      </ul>
    </div>
    <div>
      <h3>Tools</h3>
      <ul>
        <li v-for="tool in tools" :key="tool">{{ tool }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // 'client' is actually 'for' on the project, but vue-loader complains if 'for' is in the template
    client: { type: String, default: '' },
    roles: {
      type: Array,
      default() {
        return []
      },
    },
    tools: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
