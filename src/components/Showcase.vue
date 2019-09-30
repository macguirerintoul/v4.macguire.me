<template>
  <div :class="['showcase', orientation]">
    <div v-if="type === 'image'">
      <MagicImage :path="path" :alt="alt" />
    </div>
    <div v-if="type === 'video'">
      <MagicVideo :source="source" :path="path" />
    </div>
    <div v-text="content"></div>
  </div>
</template>

<script>
import MagicImage from "./MagicImage";
import MagicVideo from "./MagicVideo";

export default {
  components: {
    MagicImage,
    MagicVideo
  },
  props: {
    content: {
      type: String,
      default: ""
    },
    orientation: {
      type: String,
      default: ""
    },
    path: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    }
  }
};
</script>
