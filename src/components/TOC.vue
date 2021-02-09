<template>
	<div ref="toc" class="toc" v-if="headings.length > 0">
		<small>Contents</small>
		<ul v-if="headings.length">
			<li
				class="toc__item"
				:class="'toc__item-' + heading.localName"
				v-for="heading in headings"
				:key="heading.textContent"
			>
				<a :href="'#' + heading.id">
					{{ heading.textContent }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		headings: {
			type: Array,
			default: []
		}
	},
	updated() {
		this.$nextTick(function() {
			console.log("TOC ready for action");
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					const id = entry.target.getAttribute("id");
					if (entry.intersectionRatio > 0) {
            // Remove active from all links
            document
							.querySelectorAll(`.toc li a`).forEach(e => {
                e.parentElement.classList.remove("active");
              })
						// Add active to the most recently hit heading
						document
							.querySelector(`.toc li a[href="#${id}"]`)
							.parentElement.classList.add("active");
					}
				});
			});
			
      document.querySelectorAll('h2,h3').forEach((h) => {
        observer.observe(h);
      });
	
		});
	}
};
</script>
