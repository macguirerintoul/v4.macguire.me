<template>
	<div class="magic-video">
		<div v-if="source == 'vimeo'" class="video-embed">
			<!-- to be responsive, the iframe requires a wrapper -->
			<iframe
				:src="'https://player.vimeo.com/video/' + path + '?byline=0&portrait=0'"
				frameborder="0"
				allow="fullscreen"
				allowfullscreen
			></iframe>
		</div>
		<CldVideo
			v-if="source == 'cloudinary'"
			cloud-name="macguire"
			muted="muted"
			loop="true"
			autoplay="autoplay"
			loading="lazy"
			:public-id="path"
		>
			<CldTransformation quality="auto:eco" fetch-format="auto" />
		</CldVideo>
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
