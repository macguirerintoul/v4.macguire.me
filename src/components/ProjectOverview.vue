<template>
	<section class="overview">
		<div class="overview__main">
			<p class="hero overview__summary" v-html="project.summary" />
      <MagicImage
				class="overview__image"
				:path="project.imagePath"
				:alt="'Screenshot of ' + project.title"
			/>
			<h1 class="overview__title">{{ project.title }}</h1>
		</div>

		<div class="overview__context">
			<div>
				<h4>For</h4>
				<span>{{ project.for }}</span>
			</div>
			<div>
				<h4>Roles</h4>
				<span>{{ project.roles.join(", ") }}</span>
			</div>
			<div>
				<h4>Tools</h4>
				<span>{{ project.tools.join(", ") }}</span>
			</div>
			<div>
				<h4>More details?</h4>
				<!-- HTML here is coming directly from markdown files I write myself -->
				<!-- eslint-disable-next-line vue/no-v-html -->
				<span v-html="project.interested"></span>
			</div>
		</div>
	</section>
</template>

<script>
import MagicImage from "./MagicImage";

export default {
	components: {
		MagicImage
	},
	props: {
		project: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>
