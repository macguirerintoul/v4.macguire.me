<template>
  <div :class="['showcase', orientation]">
    <div v-if="type === 'image'">
      <CloudinaryImage :cloudinary-i-d="cloudinaryID" />
    </div>
    <div v-if="type === 'video'">
      <CldVideo
        muted
        loop="true"
        autoplay="autoplay"
        lazy
        :public-id="cloudinaryID"
      >
        <CldTransformation quality="auto:eco" fetch-format="auto" />
      </CldVideo>
    </div>
    <div>
      <block-content :blocks="content" />
    </div>
  </div>
</template>

<script>
import { CldVideo, CldTransformation } from 'cloudinary-vue'
import CloudinaryImage from '~/components/CloudinaryImage'

export default {
  props: {
    content: {
      type: Array,
      default: () => {
        return []
      },
    },
    orientation: {
      type: String,
      default: '',
    },
    cloudinaryID: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>
