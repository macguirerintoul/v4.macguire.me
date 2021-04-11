<template>
	<ImageLayout>
		<h1>{{title}}</h1>
    <p>{{ description }}</p>
	</ImageLayout>
</template>

<script>
import ImageLayout from '~/layouts/ImageLayout.vue'
const url = new URL(location.href);
export default {components: {
    ImageLayout
  },
	data() {
		return {
			title: url.searchParams.get('title'),
      description: url.searchParams.get('description'),
    }
  }
}
</script>