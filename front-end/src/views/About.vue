<template>
  <div class="about">
  <div class = container>
    <h1>About</h1>
    <br>
    <h2>Player Stats</h2>
    <h5>Current Cookies: {{currentCookies}}</h5>
    <h5>Total Cookie Production: {{cookies}}</h5>
    <h5>Player Clicks: {{clicks}}</h5>
    <h5>Cookies per Click: {{clickValue}}</h5>
    <h5>Upgrades Purchased: {{upgrades}}</h5>
    <br>
    <h2>How to Play</h2>
    <p>The goal of cookie clicker is extremely simple, click the cookie! As each time that you do, the number of cookies that you make will go up. You can then
       spend the cookies that you make on upgrades to make cookies faster.</p>
    <p><b>Warning:</b> You will lose your progress if you leave or refresh the page, but you can save a record of the cookies
        you produced to the records page.</p>
    <br>
    <h2>What's New?</h2>
    <p>I have added a records page which allows you to save your total cookies produced to a server. You can also update your record
       if for whatever reason you return and get a higher total than you had before. You can also delete records if you want, but please
       don't delete other people's records!</p>
    <br>
    <h2>About the Project</h2>
    <p>Hello! Welcome to my project! This is am <i>extremely</i> simply recreation of the popular javascript based browser game Cookie Clicker.
       Because I was limited on time, at the momment I all have implemented is effectively a proof of concept, with only the cookie clicking and
       a basic upgrade shop. But if it fits the requirements of a future project, I may come back and add more.</p>
    <p>If you enjoy this and are interested in checking out the original game check it out <a href="https://orteil.dashnet.org/cookieclicker/"><u>here</u></a></p>
    <br>
    <p>Disclaimer: Although this project was inspired by the orginal Cookie Clicker, all of the code written here is my own. The only thing used from the original
      are the art assets and the acheivement names. This was done for the sole purpose of making the project the project look nice and is not meant to intentinally infringe
      on any copyright that may exist or to attempt to pass off my work as the real game.</p>
    <br>
    <a href = "https://github.com/TheHaystackKing/creative-project4"> Website Repository </a>
  </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    currentCookies: function() {
      return this.$root.$data.cookies
    },
    cookies: function() {
      return this.$root.$data.totalCookies
    },
    clicks: function() {
      return this.$root.$data.totalClicks
    },
    upgrades: function() {
      return this.$root.$data.upgradesPurchase
    },
    clickValue: function() {
    return this.$root.$data.clickValue;
    }
  }
}
</script>
