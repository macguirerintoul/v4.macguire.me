<!-- Automatically use either <g-link> or <a> depending on whether URL is internal or external -->
<template>
	<a v-if="external" :href="url" target="_blank" rel="noopener"><slot /></a>
	<g-link v-else :to="url"><slot /></g-link>
</template>

<script>
export default {
	props: {
		url: { type: String, default: "" }
	},
	computed: {
		external() {
			// Check if the URL includes a protocol (i.e. it's not just '/picks' or something)
			return this.url.includes("://");
		}
	}
};
</script>
