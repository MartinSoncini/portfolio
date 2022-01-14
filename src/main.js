import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faMapMarkerAlt,
  faSun,
  faMoon,
  faWhatsapp,
  faGithub,
  faLinkedin
);
Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
