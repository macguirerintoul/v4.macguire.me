<template>
  <div :class="['showcase', orientation]">
    <div v-if="type === 'image'">
      <img :src="src" :alt="alt" />
    </div>
    <div v-if="type === 'video'">
      <video :src="src" muted loop="true" autoplay="autoplay" />
    </div>
    <div v-text="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ""
    },
    orientation: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
  }
};
</script>
