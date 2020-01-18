<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div id="footer-social-icons">
        <a href="https://www.facebook.com/Nomelette/">
          <b-icon pack="fab" icon="facebook-square" size="is-medium" />
        </a>
        <a href="https://github.com/mikeyhogarth/nomelette-client">
          <b-icon pack="fab" icon="github-square" size="is-medium" />
        </a>
      </div>
      <p>
        <strong>Nomelette</strong>
        {{ new Date().getFullYear() }} :: Made with
        <b-icon pack="fas" icon="heart" size="is-small" />&nbsp;by Mikey and Laura.
        <br />Photography by
        <a href="https://unsplash.com/@nevenkrcmarek">Neven Krcmarek</a> via
        <a href="https://unsplash.com">Unsplash</a>.
      </p>
    </div>
  </footer>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#footer {
  padding: 2em;
  margin-top: 5em;
  background-color: ;
  color: #fff;
}
#footer-social-icons {
  margin: 1em;
  a {
    color: silver;

    &:hover {
      color: black;
    }
  }
}
</style>
