<template>
  <blockquote>
    <span>{{ quote }}</span>
    <cite v-if="source.length > 0">
      — <a :href="url" target="_blank">{{ source }}</a>
    </cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
}
</script>
