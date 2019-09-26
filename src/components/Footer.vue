<template>
  <footer>
    <div class="footer-content">
      <h2>Macguire Rintoul</h2>
      <p>Product design + web development consultant</p>
      <h3>Care for a quarterly email?</h3>
      <label class="footer-subscribe-label" for="subscribe-input">Email</label>
      <input
        id="subscribe-input"
        v-model="email"
        class="footer-subscribe-input"
        type="email"
        placeholder="Email"
      />
      <button class="button--primary" @click="addSubsriber">Subscribe</button>
      <span v-text="subscriptionStatus"></span>
      <div class="featured-block-container">
        <FeaturedBlock type="randomStar" />
        <FeaturedBlock type="lastCommit" />
        <FeaturedBlock type="pick" />
      </div>
    </div>
  </footer>
</template>

<script>
import FeaturedBlock from '~/components/FeaturedBlock'

export default {
  components: {
    FeaturedBlock,
  },
  data() {
    return {
      email: '',
      subscriptionStatus: '',
    }
  },
  methods: {
    updateSubscriptionStatus(data) {
      if (!data.error) {
        this.subscriptionStatus = 'Successfully subscribed!'
      } else {
        this.subscriptionStatus = data.error
      }
    },
    addSubsriber() {
      console.log('Attempting to add subscriber...')
      try {
        fetch('https://api.macguire.me/api/add-subscriber', {
          method: 'post',
          body: JSON.stringify({ email: this.email }),
        })
          .then(response => {
            return response.json()
          })
          .then(data => {
            console.log('Subscription attempt finished', data)
            this.updateSubscriptionStatus(data)
          })
      } catch (error) {
        console.error(error)
        this.subscriptionStatus == error
      }
    },
  },
}
</script>
