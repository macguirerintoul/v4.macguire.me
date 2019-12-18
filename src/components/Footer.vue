<template>
  <footer>
    <div class="footer-content">
      <section class="footer__left">
        <div>
        <h2>Macguire Rintoul</h2>
        <p>Experience designer & developer</p>

      </div>
      <div class="footer__links">
        <MagicLink url="/contact">Contact</MagicLink>
        <MagicLink url="https://github.com/macguirerintoul/">GitHub</MagicLink>
        <MagicLink url="https://www.linkedin.com/in/macguirerintoul/"
          >LinkedIn</MagicLink
        >
        <MagicLink url="https://www.twitter.com/macguirerintoul/"
          >Twitter</MagicLink
        >
        <MagicLink url="https://www.instagram.com/macguirerintoul/"
          >Instagram</MagicLink>
    </div>
      <div>
        <h3>Care for a quarterly email?</h3>
        <div
          v-if="subscriptionStatus != ''"
          :class="['info-block', infoBlockStatus]"
          v-text="subscriptionMessage"
        />
        <label class="footer-subscribe-label" for="subscribe-input" hidden>
          Email
        </label>
        <form class="footer-form" @submit.prevent="addSubsriber">
          <input
            id="subscribe-input"
            v-model="email"
            class="footer-subscribe-input"
            type="email"
            placeholder="magic.johnson@gmail.com"
            required
          />
          <button class="button--primary">
            Subscribe
          </button>
        </form>
      </div>
      <g-image class="smiley" src="~/assets/images/smiley.png" width="50"/>
      </section>

      <section class="featured-block-container">
        <FeaturedBlock type="randomStar" />
        <FeaturedBlock type="lastCommit" />
        <FeaturedBlock type="pick" />
      </section>
    </div>
  </footer>
</template>

<script>
import FeaturedBlock from '~/components/FeaturedBlock'
import MagicLink from '~/components/MagicLink'

export default {
  components: {
    FeaturedBlock,
    MagicLink,
  },
  data() {
    return {
      email: '',
      subscriptionStatus: '',
    }
  },
  computed: {
    infoBlockStatus: function() {
      return 'info-block--' + this.subscriptionStatus
    },
  },
  methods: {
    updateSubscriptionStatus(data) {
      if (!data.error) {
        this.subscriptionStatus = 'success'
        this.subscriptionMessage = 'Successfully subscribed.'
      } else {
        this.subscriptionStatus = 'error'
        this.subscriptionMessage = data.error
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
