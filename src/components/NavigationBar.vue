<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 id="navbar-brand">nomelette</h1>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        About
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/books' }">
        Books
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/browse' }">
        Browse
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped lang="scss">
#navbar-brand {
  font-size: 1.5em;
  font-family: "Leckerli One", cursive;
}
a {
  font-weight: bold;
}
</style>
