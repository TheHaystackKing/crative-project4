<template>
  <div class="home">
    <div class="container">
      <h1>Cookie Clicker</h1>
      <img v-on:click="cookieClicked" class="img-fluid" alt="Vue logo" src="../assets/BigCookie.png">
      <h3>{{cookies}} cookies</h3>
      <br>
      <a href = "https://github.com/TheHaystackKing/CreativeProject3"> Website Repository </a>
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
