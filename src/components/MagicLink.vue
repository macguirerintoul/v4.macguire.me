<!-- Automatically use either <nuxt-link> or <a> depending on whether URL is internal or external -->
<template>
  <span>
    <a v-if="external" :href="url" target="_blank" noreferrer><slot /></a>
    <g-link v-else :to="url"><slot /></g-link>
  </span>
</template>

<script>
export default {
  props: {
    url: { type: String, default: '' },
  },
  computed: {
    external() {
      // Check if the URL includes a protocol (i.e. it's not just '/picks' or something)
      return this.url.includes('http')
    },
  },
}
</script>
