<template>
  <footer>
    <div class="footer-content">
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
