<template>
	<section class="overview">
		<div class="overview__main">
			<span class="overview__header"
				>{{ project.title }} ✦ {{ project.year }} ✦
				<Tag v-for="(tag, index) in project.tags" :key="tag"
					><span v-if="index != 0">, </span>{{ tag }}</Tag
				></span
			>
			<p class="overview__summary" v-html="project.summary" />
			<MagicImage
				class="overview__image"
				:path="project.imagePath"
				:alt="'Screenshot of ' + project.title"
			/>
			<div class="overview__context">
				<h1 class="overview__title">{{ project.title }}</h1>

				<table>
					<tr class="overview__context_item">
						<td class="overview__context_label">For</td>
						<td>{{ project.for }}</td>
					</tr>
					<tr class="overview__context_item">
						<td class="overview__context_label">Roles</td>
						<td>{{ project.roles.join(", ") }}</td>
					</tr>
					<tr class="overview__context_item">
						<td class="overview__context_label">Tools</td>
						<td>{{ project.tools.join(", ") }}</td>
					</tr>
				</table>
			</div>
			<hr />
		</div>
	</section>
</template>

<script>
import MagicImage from "./MagicImage";
import Tag from "./Tag";

export default {
	components: {
		MagicImage,
		Tag
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
