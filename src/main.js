import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
//import "./registerServiceWorker";
import PageHeader from "@/components/PageHeader";
import NomeletteSpacer from "@/components/NomeletteSpacer";
import NomeletteLoader from "@/components/NomeletteLoader";

Vue.use(Buefy);

Vue.config.productionTip = false;

// Global components
Vue.component("page-header", PageHeader);
Vue.component("nomelette-spacer", NomeletteSpacer);
Vue.component("nomelette-loader", NomeletteLoader);

// Initialise Vue
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
