import "@fortawesome/fontawesome-free/css/all.min.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
//import "./registerServiceWorker";
import HatSpacer from "@/components/HatSpacer";
import PageHeader from "@/components/PageHeader";
import CookieLoader from "@/components/CookieLoader";

Vue.use(Buefy);

Vue.config.productionTip = false;

// Global components
Vue.component("hat-spacer", HatSpacer);
Vue.component("page-header", PageHeader);
Vue.component("cookie-loader", CookieLoader);

// Initialise Vue
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
