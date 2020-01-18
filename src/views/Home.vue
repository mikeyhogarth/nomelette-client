<template>
  <div>
    <section class="hero is-medium is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 id="hero-title">nomelette</h1>
          <h2 class="subtitle">The recipes of Sheila Hogarth</h2>
          <div class="columns">
            <div class="column has-text-centered">
              <b-button
                style="margin-right: 1em"
                rounded
                size="is-primary is-medium"
                >Browse Recipes</b-button
              >
              <b-button rounded outlined size="is-primary is-medium"
                >What is Nomelette?</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container content">
        <p>
          Experience over 40 years of classic family recipes created by
          Cumbria's renowned home cook Sheila Hogarth. Nomelette is full of
          traditional recipes from warming casseroles to delicious puddings.
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url("../assets/images/unsplash/neven-krcmarek-0TH1H1rq_eY-unsplash.jpg");
  background-color: darkslategrey;
  background-size: cover;
}
#hero-title {
  font-size: 4rem;
  text-shadow: 4px 4px #000;
  font-family: "Leckerli One", cursive;
}
</style>
