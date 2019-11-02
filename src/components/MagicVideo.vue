<template>
  <div>
    <div v-show="source == 'vimeo'" class="video-embed">
      <iframe
        :src="'https://player.vimeo.com/video/' + path + '?byline=0&portrait=0'"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
    <div v-show="source == 'cloudinary'">
      <CldVideo muted loop="true" autoplay="autoplay" lazy :public-id="path">
        <CldTransformation quality="auto:eco" fetch-format="auto" />
      </CldVideo>
    </div>
  </div>
</template>

<script>
import { CldVideo, CldTransformation } from 'cloudinary-vue'

export default {
  components: {
    CldVideo,
    CldTransformation,
  },
  props: {
    path: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      default: '',
    },
  },
}
</script>
