<template>
	<blockquote>
		<slot />
		<cite v-show="source.length > 0">
			— <MagicLink v-if="url.length > 0" :url="url">{{ source }}</MagicLink>
			<span v-else>{{ source }}</span>
		</cite>
	</blockquote>
</template>

<script>
export default {
	props: {
		quote: {
			type: String,
			default: ""
		},
		source: {
			type: String,
			default: ""
		},
		url: {
			type: String,
			default: ""
		}
	}
};
</script>
