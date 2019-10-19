<template>
  <header>
    <nav
      :class="{ 'is-active': showMobileMenu }"
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <g-link
          class="navbar-item"
          to="/"
        >
          <span class="header-name">Macguire Rintoul</span>
        </g-link>

        <button
          class="mobile-menu button--secondary"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleMobileMenu"
        >
          <span>Menu</span>
        </button>
      </div>

      <div
        class="navbar-menu"
        @click="closeMobileMenu"
      >
        <div class="navbar-end">
          <g-link
            to="/"
            class="navbar-item hvr-underline-reveal"
          >
            Home
          </g-link>
          <g-link
            to="/about"
            class="navbar-item hvr-underline-reveal"
          >
            About
          </g-link>
          <g-link
            to="/articles"
            class="navbar-item hvr-underline-reveal"
          >
            Articles
          </g-link>
          <button
            class="button--primary"
            @click="showModal"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    >
      <template v-slot:header>
        Contact
      </template>
      <template v-slot:body>
        <ContactForm />
      </template>
    </Modal>
  </header>
</template>

<script>

import Modal from './Modal.vue';
import ContactForm from './ContactForm.vue';
export default {
  components: {
     Modal, ContactForm
   },
  data() {
    return { showMobileMenu: false, isModalVisible: false,}
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    closeMobileMenu() {
      this.showMobileMenu = false
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }

  },
}
</script>
