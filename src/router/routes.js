import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/recipes/:recipe",
    name: "recipes",
    component: () => import("../views/Recipe.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/books",
    name: "books",
    component: () => import("../views/Books.vue")
  },
  {
    path: "/books/:book",
    name: "book",
    component: () => import("../views/Book.vue")
  },
  {
    path: "/browse",
    name: "browse",
    component: () => import("../views/Browse.vue")
  },
  {
    path: "/tagged-with/:tag",
    name: "tagged-with",
    component: () => import("../views/Tagging.vue")
  }
];
