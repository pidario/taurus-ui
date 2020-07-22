<template>
  <v-app>
    <Header :expanded="false" />

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <router-view />
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  props: {
  },
  data: () => ({
  }),
  created () {
    this.$vuetify.theme.dark = true;
  },
};
</script>
