<template>
	<div :class="['showcase', 'showcase--' + orientation]">
		<MagicImage v-if="type === 'image'" :path="path" :alt="alt" />
		<MagicVideo v-if="type === 'video'" :source="source" :path="path" />
		<p>{{ content }}</p>
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
			default: "vertical"
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
