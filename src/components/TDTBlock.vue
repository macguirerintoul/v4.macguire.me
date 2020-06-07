<template>
	<div>
		<h2>{{ title }}</h2>
		<p>{{ description }}</p>
		<small>{{ tags }}</small>
	</div>
</template>

<script>
export default {
	props: {
		title,
		description,
		tags
	}
}
</script>
