import "@fortawesome/fontawesome-free/css/all.min.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
//import "./registerServiceWorker";
import HatSpacer from "@/components/HatSpacer";
Vue.use(Buefy);

Vue.config.productionTip = false;

// Global components
Vue.component("hat-spacer", HatSpacer);

// Initialise Vue
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
