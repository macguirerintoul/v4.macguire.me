<template>
	<section class="overview">
		<div class="overview__main">
			<div>
				<h1 class="overview__title">{{ project.title }}</h1>
				<!-- HTML here is coming directly from markdown files I write myself -->
				<!-- eslint-disable-next-line vue/no-v-html -->
				<p class="overview__summary" v-html="project.summary" />
			</div>
			<MagicImage
				class="overview__image"
				:path="project.imagePath"
				:alt="'Screenshot of ' + project.title"
			/>
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
				<h4>Interested?</h4>
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
