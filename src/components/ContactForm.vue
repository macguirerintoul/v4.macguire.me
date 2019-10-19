<template>
  <div>
    <form
      v-if="submitted === false"
      method="POST"
      name="contact"
      data-netlify="true"
      @submit.prevent="handleSubmit"
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
      >
      <p>The contents of this form will be sent directly to my inbox, and I will be in touch with you shortly.</p>

      <label for="name">Name</label>
      <input
        v-model="formData.name"
        type="text"
        name="name"
      >
      <label for="email">Email</label>
      <input
        v-model="formData.email"
        type="email"
        name="email"
        required
      >

      <label for="message">Message</label>
      <textarea
        v-model="formData.message"
        name="message"
        required
      />

      <div class="modal__button-container">
        <button
          type="button"
          class="button--secondary"
          @click="close"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="button--primary"
        >
          Send
        </button>
      </div>
    </form>
    <div v-if="submitted === 'error'">
      <span>error</span>
    </div>
    <div v-if="submitted === true">
      <span>submitted!</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      formData: {}
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      // Post the form data to '/' where Netlify forms will pick it up
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(data => {
        console.log(data)
        if (data.status == 200) {
          this.submitted = true
        } else {
          this.submitted = 'error'
        }
      })
      .catch(error => {
        console.error(error)
        this.submitted = 'error'
        alert(error)
      })
    },
    close() {
      this.$parent.$emit('close');
    },
  }
}
</script>
