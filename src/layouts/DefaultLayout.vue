<template>
  <div id="app">
    <Header />

    <main class="container">
      <slot/>
    </main>

    <Footer />
    <!--
    <div class="note">
      <p>⚠️ Please note: this site is a work in progress. <a href="https://github.com/macguirerintoul/macguire.me" target="_blank">View on GitHub</a></p>
    </div>
    -->
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>
