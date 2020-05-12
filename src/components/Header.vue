<template>
	<header>
		<nav
			:class="{ 'is-active': showMobileMenu, 'util-has-home-bar': hasHomeBar }"
			class="navbar container"
		>
			<div class="navbar-brand">
				<g-link class="navbar-item" to="/">
					<span class="header-name">Macguire Rintoul</span>
				</g-link>

				<button class="mobile-menu button--secondary" @click="toggleMobileMenu">
					Menu
				</button>
			</div>

			<div class="navbar-menu" @click="closeMobileMenu">
				<div class="navbar-end">
					<g-link to="/" class="navbar-item hvr-underline-reveal">
						Work
					</g-link>
					<g-link to="/blog" class="navbar-item hvr-underline-reveal">
						Blog
					</g-link>
					<g-link to="/about" class="navbar-item hvr-underline-reveal">
						About
					</g-link>
					<g-link
						class="navbar-item contact-button button--primary"
						to="/contact"
					>
						Contact
					</g-link>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	mounted() {
		let iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
		let aspect = window.screen.width / window.screen.height;
		if (iPhone && aspect.toFixed(3) === "0.462") {
			this.hasHomeBar = true;
		}
	},
	data() {
		return { showMobileMenu: false, hasHomeBar: false };
	},
	methods: {
		toggleMobileMenu() {
			this.showMobileMenu = !this.showMobileMenu;
		},
		closeMobileMenu() {
			this.showMobileMenu = false;
		}
	}
};
</script>
