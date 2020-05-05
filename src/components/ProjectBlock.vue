<template>
	<g-link class="project-block" :to="project.path">
		<h2 class="project-block__title">{{ project.title }}</h2>
		<p class="project-block__description">{{ project.shortDescription }}</p>
		<div class="project-block__context">
			<small>{{ project.year }} – {{ project.tags.join(", ") }}</small>
		</div>
	</g-link>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			default: () => {
				return {};
			}
		}
	}
};
</script>
