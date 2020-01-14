<template>
  <div id="nav">
    <img alt="Vue logo" src="../assets/nomelette-logo.png" />
    <div id="nav-links">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/about">About</router-link>&nbsp;|
      <router-link to="/books">Books</router-link>&nbsp;|
      <router-link to="/browse">Browse</router-link>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#nav {
  padding: 30px;
  background-color: #00d2d1;
  color: #fff;
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: #ff5722;
    }
  }
}
</style>
