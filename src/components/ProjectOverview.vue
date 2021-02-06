<template>
	<section class="overview">
		<div class="overview__main">
      <span class="overview__header">{{ project.title }} • {{ project.year }} • <Tag v-bind:key="tag" v-for="(tag, index) in project.tags"><span v-if="index != 0">, </span>{{ tag }}</Tag></span>
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
		</div>
	</section>
</template>

<script>
import MagicImage from "./MagicImage";
import Tag from './Tag';

export default {
	components: {
		MagicImage, Tag
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
