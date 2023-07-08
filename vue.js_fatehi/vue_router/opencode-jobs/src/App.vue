<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name : 'Jobs'}">Jobs</router-link> |
    <a href="/about">about</a>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
