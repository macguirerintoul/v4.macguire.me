<template>
	<DefaultLayout>
		<h1>{{ $page.service.title }}</h1>
		<VueRemarkContent class="overview__summary" />
	</DefaultLayout>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.service.title, // Set the <title> to that of the service
			meta: [{ property: "og:title", content: this.$page.service.title }]
		};
	}
};
</script>

<page-query>
	query Service($id: ID!) {
		service: service(id: $id) {
			title
			content
		}
	}
</page-query>
