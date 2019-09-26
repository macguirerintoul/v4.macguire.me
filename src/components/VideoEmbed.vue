<template>
  <vimeo-player class="video-embed" :video-id="id" :options="options" />
</template>

<script>
// This component may need to be modified to support YouTube
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    platform: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      options: { portrait: false, byline: false },
    }
  },
}
</script>
