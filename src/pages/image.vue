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

export default {
	components: {
		ImageLayout,
		MagicImage,
		Tag
	},
	data() {
		return {
			url: null,
			title: null,
			description: null,
			imagePath: null
		};
	},
	mounted() {
		this.url = new URL(location.href);
		this.title = this.url.searchParams.get("title");
		this.description = this.url.searchParams.get("description");
		this.imagePath = this.url.searchParams.get("imagePath");
	}
};
</script>
