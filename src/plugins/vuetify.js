import Vue from "vue";
import Vuetify from "vuetify/lib";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faList, faHome } from "@fortawesome/free-solid-svg-icons";
import { faBtc } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faList, faHome, faBtc);
Vue.component("fa", FontAwesomeIcon);

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
  },
});
