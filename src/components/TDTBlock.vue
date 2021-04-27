<template>
	<div class="tdt-block">
		<div>
			<MagicLink class="tdt-block__title" :url="node.path">
				<h2>{{ node.title }}</h2>
			</MagicLink>
		</div>
		<p class="tdt-block__description">{{ node.description }}</p>
		<div class="tdt-block__subtitle">
			<span class="tdt-block__tags">
				<Tag v-for="(tag, index) in this.node.tags" :key="tag"
					><span v-if="index != 0">, </span>{{ tag }}</Tag
				>
			</span>
			<small class="tdt-block__date">{{ date }}</small>
		</div>
	</div>
</template>

<script>
import { toDateString } from "../utilities.js";
import MagicLink from "~/components/MagicLink";
import Tag from "~/components/Tag";

export default {
	components: {
		MagicLink,
		Tag
	},
	props: {
		node: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	computed: {
		date() {
			let context = "";
			if (this.node.year) {
				context += this.node.year;
			} else {
				context += toDateString(new Date(this.node.date).toISOString());
			}
			return context;
		}
	}
};
</script>
