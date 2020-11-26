<template>
	<div class="tdt-block">
		<MagicLink class="tdt-block__title" :url="node.path">
			<h2>{{ node.title }}</h2>
		</MagicLink>
		<p class="tdt-block__description">{{ node.description }}</p>
		<div>
			<small class="tdt-block__date">{{ date }}</small>
			<div class="tdt-block__tags">
				<Tag v-for="tag in this.node.tags">{{ tag }}</Tag>
			</div>
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
