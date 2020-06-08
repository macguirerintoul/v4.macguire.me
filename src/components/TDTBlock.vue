<template>
	<div>
		<MagicLink :url="node.path">
			<h2>{{ node.title }}</h2>
		</MagicLink>
		<p>{{ node.description }}</p>
		<small>{{ date }}</small>
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
		date() {
			if (this.node.year) {
				return this.node.year
			} else {
				return toDateString(new Date(this.node.date).toISOString());
			}
		}
	}
};
</script>
