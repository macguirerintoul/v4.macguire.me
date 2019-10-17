<template>
  <form
    method="POST" name="contact" data-netlify="true" v-on:submit.prevent="handleSubmit"
  action="/success/"
  data-netlify="true"
  data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" :value="name" />
      <p>The contents of this form will be sent directly to my inbox, and I will be in touch with you shortly.</p>

      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>


  <div>
    <label>Name <input type="text" name="name" v-model="formData.name" /></label>
  </div>
  <div>
    <label>Email <input type="email" name="email" v-model="formData.email" /></label>
  </div>

  <label for="message">Message<textarea  name="message" v-model="formData.message" /></label>
  <div>
      <button @click="close" class="button--secondary">Cancel</button>
    <button type="submit" @click="submit" class="button--primary">Send</button>
  </div>
</form>
</template>

<script>
export default {
  data() {
    return {
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
    this.$emit('submit');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
    .then(() => this.$router.push('/success'))
    .catch(error => alert(error))
  },
    close() {
      this.$emit('close');
    },
  }
}
</script>
