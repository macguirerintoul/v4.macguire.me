<template>
	<DefaultLayout>
		<router-view />
	</DefaultLayout>
</template>

<script>
import DefaultLayout from "~/layouts/DefaultLayout.vue";

export default {
	components: {
		DefaultLayout
	},
	metaInfo: {
		// This is where the template for page titles is defined.
		titleTemplate: "%s • Macguire Rintoul"
	}
};
</script>
