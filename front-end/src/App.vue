<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/files">Records</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  background-color: #efe9e2;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body, html {
  height: 100%;
}

.bg {
  /* The image used */
  background-image: url("./assets/background.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  color:white;
  text-decoration:none;
  text-decoration-color:white;
}

.container-fluid {
  text-align:center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
