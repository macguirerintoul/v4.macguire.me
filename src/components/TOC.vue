<template>
	<div v-if="headings.length > 0" ref="toc" class="toc">
		<small>Contents</small>
		<ul class="util-unstyled-list" v-if="headings.length">
			<li
				v-for="heading in headings"
				:key="heading.textContent"
				class="toc__item"
				:class="'toc__item-' + heading.localName"
			>
				<a :href="'#' + heading.id" @click="openDetails">
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
			default: () => []
		}
	},
	updated() {
		// If the TOC can be accessed, start the observers
		if (this.$refs.toc) {
			this.observeTocOverlap();
			this.observeScrollPosition();
		}
	},
	methods: {
		openDetails() {
			// We need to expand the 'details' element that contains 'Process & more' when TOC links are clicked so that we can see the content inside it
			document.querySelector("details").setAttribute("open", true);
		},
		observeTocOverlap() {
			const overlappers = document.querySelectorAll(".showcase *, img"); // What to check for overlap with
			const tocElement = document.querySelector(".toc"); // the toc
			console.log(tocElement);

			// Listen to scroll events
			window.addEventListener(
				"scroll",
				function() {
					let anyOverlap = null;

					overlappers.forEach(function(element) {
						const elementRect = element.getBoundingClientRect();
						const tocRect = tocElement.getBoundingClientRect();

						let thisOverlap = !(
							elementRect.right < tocRect.left ||
							elementRect.left > tocRect.right ||
							elementRect.bottom < tocRect.top ||
							elementRect.top > tocRect.bottom
						);

						if (thisOverlap) {
							anyOverlap = true;
						}
					});

					if (anyOverlap) {
						tocElement.style.opacity = 0;
					} else {
						tocElement.style.opacity = 1;
					}
				},
				{ passive: true }
			);
		},
		observeScrollPosition() {
			// Create IntersectionObserver to set the last viewed heading as 'active' in the TOC
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					const id = entry.target.getAttribute("id");
					if (entry.intersectionRatio > 0) {
						// Remove active from all links
						document.querySelectorAll(`.toc li a`).forEach(e => {
							e.parentElement.classList.remove("active-heading");
						});
						// Add active to the most recently hit heading
						document
							.querySelector(`.toc li a[href="#${id}"]`)
							.parentElement.classList.add("active-heading");
					}
				});
			});

			// Start observing 😎
			document.querySelectorAll("h2,h3").forEach(h => {
				observer.observe(h);
			});
		}
	}
};
</script>
