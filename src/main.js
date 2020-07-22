import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Foo from "./components/Foo.vue";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/foo",
      component: Foo,
    },
  ],
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
