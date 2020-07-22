<template>
  <div>
    <v-navigation-drawer
      v-model="isExpanded"
      app
      clipped
    >
      <v-list dense>
        <router-link
          tag="span"
          to="/"
        >
          <v-list-item link>
            <v-list-item-action>
              <fa :icon="['fas', 'home']" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link
          tag="span"
          to="/foo"
        >
          <v-list-item link>
            <v-list-item-action>
              <fa :icon="['fas', 'list']" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Exchanges</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-list-item link>
          <v-list-item-action>
            <fa :icon="['fas', 'list']" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Strategies</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <fa :icon="['fab', 'btc']" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Test</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="expand">
        <fa
          :icon="['fas', 'bars']"
          size="2x"
        />
      </v-app-bar-nav-icon>
      <v-toolbar-title>Taurus</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    expanded: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data () {
    return {
      isExpanded: this.expanded,
    };
  },
  methods: {
    expand () {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
