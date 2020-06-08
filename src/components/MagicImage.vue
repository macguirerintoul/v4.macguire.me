<template>
	<cld-image
		cloud-name="macguire"
		class="magic-image"
		loading="lazy"
		dpr="auto"
		width="auto"
		crop="scale"
		:alt="alt"
		:public-id="path"
	>
		<cld-transformation quality="auto" fetch-format="auto" />
	</cld-image>
</template>

<script>
import { CldTransformation, CldImage } from "cloudinary-vue";

export default {
	components: {
		CldImage,
		CldTransformation
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
