<template>
  <div>
    <div
      v-if="source == 'vimeo'"
      style="padding:56.25% 0 0 0; position:relative;"
    >
      <iframe
        :src="'https://player.vimeo.com/video/' + path + '?byline=0&portrait=0'"
        style="position:absolute; top:0; left:0; width:100%; height:100%;"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
    <div v-if="source == 'cloudinary'">
      <CldVideo muted loop="true" autoplay="autoplay" lazy :public-id="path">
        <CldTransformation quality="auto:eco" fetch-format="auto" />
      </CldVideo>
    </div>
  </div>
</template>

<script>
import { CldVideo, CldTransformation } from "cloudinary-vue";

export default {
  components: {
    CldVideo,
    CldTransformation
  },
  props: {
    path: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      default: ""
    }
  }
};
</script>
