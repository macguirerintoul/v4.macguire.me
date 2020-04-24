<template>
	<g-link class="project-block" :to="project.path">
		<h2 class="project-block--title">{{ project.title }}</h2>
		<p class="project-block__description">{{ project.shortDescription }}</p>
		<div class="project-block__context">
			<small class="project-block__year">{{ project.year }} –</small>
			<small class="project-block__tags">{{ project.tags.join(", ") }}</small>
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
