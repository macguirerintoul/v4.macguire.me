<template>
  <footer>
    <div class="footer-content">
      <section>
        <h2>Macguire Rintoul</h2>
        <p>Product design + web development consultant</p>
        <h3>Care for a quarterly email?</h3>
        <div
          v-if="subscriptionStatus != ''"
          :class="['info-block', infoBlockStatus]"
          v-text="subscriptionMessage"
        />
        <label class="footer-subscribe-label" for="subscribe-input">
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
import FeaturedBlock from "~/components/FeaturedBlock";

export default {
  components: {
    FeaturedBlock
  },
  data() {
    return {
      email: "",
      subscriptionStatus: ""
    };
  },
  computed: {
    infoBlockStatus: function() {
      return "info-block--" + this.subscriptionStatus;
    }
  },
  methods: {
    updateSubscriptionStatus(data) {
      if (!data.error) {
        this.subscriptionStatus = "success";
        this.subscriptionMessage = "Successfully subscribed.";
      } else {
        this.subscriptionStatus = "error";
        this.subscriptionMessage = data.error;
      }
    },
    addSubsriber() {
      console.log("Attempting to add subscriber...");
      try {
        fetch("https://api.macguire.me/api/add-subscriber", {
          method: "post",
          body: JSON.stringify({ email: this.email })
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log("Subscription attempt finished", data);
            this.updateSubscriptionStatus(data);
          });
      } catch (error) {
        console.error(error);
        this.subscriptionStatus == error;
      }
    }
  }
};
</script>
