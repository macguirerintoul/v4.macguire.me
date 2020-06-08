<template>
	<div class="tdt-block">
		<MagicLink class="tdt-block__title" :url="node.path">
			<h2>{{ node.title }}</h2>
		</MagicLink>
		<p class="tdt-block__description">{{ node.description }}</p>
		<small>{{ context }}</small>
	</div>
</template>

<script>
import { toDateString } from "../utilities.js";
import MagicLink from "~/components/MagicLink";

export default {
	components: {
		MagicLink
	},
	props: {
		node: Object,
	},
	computed: {
		context() {
			let context = "";
			if (this.node.year) {
				context += this.node.year
			} else {
				context += toDateString(new Date(this.node.date).toISOString());
			}
			if (this.node.tags) context += " — " + this.node.tags.join(", ");
			return context;
		}
	}
};
</script>
