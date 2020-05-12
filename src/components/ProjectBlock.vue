<template>
	<div class="project-block" :to="project.path">
		<h2 class="project-block__title">
			<g-link :to="project.path"> {{ project.title }}</g-link>
		</h2>
		<p class="project-block__description">{{ project.shortDescription }}</p>
		<div class="project-block__context">
			<small>{{ project.year }} – {{ project.tags.join(", ") }}</small>
		</div>
	</div>
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
