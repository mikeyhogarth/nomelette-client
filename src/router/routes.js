import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home
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
    path: "/book",
    name: "book",
    component: () => import("../views/Book.vue")
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/tagged-with",
    name: "tagged-with",
    component: () => import("../views/Tagging.vue")
  }
];