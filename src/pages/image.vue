<template>
	<ImageLayout>
		<div class="image-layout-flex">
			<div>
				<h1>{{ title }}</h1>
				<p>{{ description }}</p>
        <div class="gradient"></div>
			</div>
			<div v-if="this.imagePath">
				<MagicImage
					class="overview__image"
					:path="imagePath"
					:alt="'Screenshot of ' + title"
				/>
			</div>
		</div>
		<h3>macguire.me</h3>
	</ImageLayout>
</template>

<script>
import ImageLayout from "~/layouts/ImageLayout.vue";
import MagicImage from "~/components/MagicImage.vue";
import Tag from "~/components/Tag.vue";

const url = new URL(location.href);
export default {
	components: {
		ImageLayout,
		MagicImage,
		Tag
	},
	data() {
		return {
			title: url.searchParams.get("title"),
			description: url.searchParams.get("description"),
			imagePath: url.searchParams.get("imagePath")
		};
	}
};
</script>
