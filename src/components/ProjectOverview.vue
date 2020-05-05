<template>
	<section class="project-overview">
		<div class="project-overview__main">
			<div>
				<h1 class="project-overview__title">{{ project.title }}</h1>
				<p class="project-overview__summary" v-html="project.summary" />
			</div>
			<div class="project-overview__image">
				<MagicImage
					:path="project.imagePath"
					:alt="'Screenshot of ' + project.title"
				/>
			</div>
		</div>

		<div class="project-overview__context">
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
