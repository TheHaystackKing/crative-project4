<template>
  <div class="home">
    <div class="container">
      <h1>Cookie Clicker</h1>
      <img v-on:click="cookieClicked" class="img-fluid" alt="Big Cookie" src="../assets/BigCookie.png">
      <h3>{{cookies}} cookies</h3>
      <br>
      <a href = "https://github.com/TheHaystackKing/creative-project4"> Website Repository </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    cookies: function() {
      return this.$root.$data.cookies
    }
  },
  methods: {
    cookieClicked() {
      this.$root.$data.cookies += this.$root.$data.clickValue;
      this.$root.$data.totalCookies += this.$root.$data.clickValue;
      this.$root.$data.totalClicks++;
    }
  }
}
</script>

<style>

.container {
  color: white;
  text-align:center;
}
</style>
