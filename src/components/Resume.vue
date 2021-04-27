<template>
	<section class="content">
		<div><!-- I set up content to be 3 column grid... this is weird --></div>
		<div class="resume">
			<h2>Experience</h2>
			<div
				v-for="job in resume"
				:key="job.title + job.organization"
				class="resume__item"
			>
				<h3>{{ job.title }} <Spacer /> {{ job.organization }}</h3>
				<h4 class="resume__subtitle">
					{{ job.time }}
				</h4>
				<ul class="resume__responsibilities">
					<li v-for="item in job.description" :key="item">{{ item }}</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import resume from "../../content/resume.yaml";
import Spacer from "~/components/Spacer";

export default {
	components: {
		Spacer
	},
	data() {
		return { resume };
	}
};
</script>
