<template>
  <div class="shop">
  <div class="container">
    <h1>Upgrade Shop</h1>
    <br>
    <div class="upgrades">
      <div class="upgrade" v-for="upgrade in upgrades" :key=upgrade.id>
        <div class="row">
          <div class="col-sm text-right">
            <img class="img-fluid" src="../assets/ClickUpgrade.png">
          </div>
          <div class="col-sm">
            <h4>{{upgrade.name}}</h4>
            <p>{{upgrade.description}}</p>
          </div>
          <div class="col-sm text-left">
            <button v-on:click="purchaseUpgrade(upgrade)" class="auto">{{upgrade.cost}}</button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <a href = "https://github.com/TheHaystackKing/creative-project4"> Website Repository </a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  computed: {
    upgrades: function() {
      return this.$root.$data.upgrades;
    }
  },
  methods: {
    purchaseUpgrade(upgrade) {
      if(upgrade.cost <= this.$root.$data.cookies) {
        let index = this.$root.$data.upgrades.indexOf(upgrade);
        this.$root.$data.clickValue *= upgrade.multiplier;
        this.$root.$data.cookies -= upgrade.cost;
        this.$root.$data.upgrades.splice(index,1);
        this.$root.$data.upgradesPurchase++;
      }
      else {
        console.log("Insuffient Cookies");
      }
    }
  }
}
</script>
