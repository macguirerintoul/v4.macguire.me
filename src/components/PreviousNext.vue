<template>
	<div class="previous-next">
		<div class="previous-next__previous">
			<label v-if="previous !== null">← Previous {{ type }}</label>
			<g-link :to="previous.path" v-if="previous !== null">
				{{ previous.title }}
			</g-link>
		</div>
		<div class="previous-next__next">
			<label v-if="next !== null">Next {{ type }} →</label>
			<g-link v-if="next !== null" :to="next.path">
				{{ next.title }}
			</g-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: { default: "post", type: String },
		previous: {
			default: () => {
				return {};
			},
			type: Object
		},
		next: {
			default: () => {
				return {};
			},
			type: Object
		}
	}
};
</script>
