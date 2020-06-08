<template>
	<div>
		<MagicLink :url="url">
			<h2>{{ title }}</h2>
		</MagicLink>
		<p>{{ description }}</p>
		<small>{{ date }}</small>
	</div>
</template>

<script>
import MagicLink from "~/components/MagicLink";

export default {
	components: {
		MagicLink
	},
	props: {
		title: String,
		description: String,
		tags: Array,
		date: String,
		url: String
	}	
};
</script>
