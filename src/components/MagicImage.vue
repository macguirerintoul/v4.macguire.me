<template>
  <CldImage
    class="img-zooming"
    lazy
    dpr="auto"
    width="auto"
    crop="scale"
    :alt="alt"
    :public-id="path"
  >
    <CldTransformation quality="auto" fetch-format="auto" />
  </CldImage>
</template>

<script>
import { CldImage, CldTransformation } from "cloudinary-vue";

export default {
  components: {
    CldImage
  },
  props: {
    path: {
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
