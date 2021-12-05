<template>
  <div class="files">
    <div class="container">
      <h1>Records</h1>

      <div class="saves" v-for="item in items" :key="item.id">
        <h3>{{item.title}}&emsp;&emsp;{{item.totalCookies}} cookies</h3>
        <button @click="editItem(item)">Update Score</button>
        <button @click="deleteItem(item)">Delete Score</button>
        <hr>
      </div>
      <p></p>
      <h4>Add New Record to List</h4>
      <div class=form>
        <input v-model="title" placeholder="Player Name">
        <button @click="upload">Save</button>
      </div>
      <a href = "https://github.com/TheHaystackKing/creative-project4"> Website Repository </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Files',
  data() {
    return {
      title:"",
      items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async upload() {
      try {
        await axios.post('/api/items', {
          title: this.title,
          cookies: this.$root.$data.cookies,
          totalCookies: this.$root.$data.totalCookies,
          totalClicks: this.$root.$data.totalClicks,
          upgradesPurchase: this.$root.$data.upgradesPurchase,
          clickValue: this.$root.$data.clickValue
          });
          this.getItems();
        } catch (error) {
          console.log(error);
        }
      },
      async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          totalCookies: this.$root.$data.totalCookies,
        });
        this.getItems();
      } catch(error) {
        console.log(error)
      }
    },
  }
}
</script>
