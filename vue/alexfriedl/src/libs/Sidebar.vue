<template>
  <v-navigation-drawer
    id="sidebar"
    v-model="drawer"
    v-bind:dark="$mq === 'desktop' || $mq === 'laptop'"
    v-bind:light="$mq === 'mobile' || $mq === 'tablet'"
    v-bind:floating="$mq === 'desktop' || $mq === 'laptop'"
    v-bind:hide-overlay="$mq === 'desktop' || $mq === 'laptop'"
    v-bind:stateless="$mq === 'desktop' || $mq === 'laptop'"
    v-bind:absolute="$mq === 'mobile' || $mq === 'tablet'"
    v-bind:temporary="$mq === 'mobile' || $mq === 'tablet'"
  >
    <v-list>
      <v-list-tile ripple :to="{path: '/intro'}">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>DNA</v-list-tile-title>
      </v-list-tile>
      <v-list-tile ripple :to="{path: '/person'}">
        <v-list-tile-action>
          <v-icon>person</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Person</v-list-tile-title>
      </v-list-tile>
      <v-list-tile ripple :to="{path: '/process'}">
        <v-list-tile-action>
          <v-icon>360</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Process</v-list-tile-title>
      </v-list-tile>
      <v-list-group prepend-icon="photo_library">
        <template v-slot:activator>
          <v-list-tile ripple :to="{path: '/showcase'}">
            <v-list-tile-title>Showcase</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list-group v-for="(key, value, i) in items" :key="i" no-action sub-group>
          <template v-slot:activator>
            <v-list-tile ripple :to="{path: key.route.path}">
              <span class="subtitle">{{key.subtitle}}</span>
              <v-list-tile-title>{{key.title}}</v-list-tile-title>
            </v-list-tile>
          </template>
          <!-- see CSS!!!!!
          .v-list__group__header--sub-group .v-list__group__header__prepend-icon {
    visibility: hidden;
}
          -->
          <!--<v-list-tile v-for="(step, i) in key.route.items" :key="i" :to="{path: step[2]}">
            <v-list-tile-title v-text="step[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="step[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>-->
        </v-list-group>
      </v-list-group>
      <hr>
      <v-list-tile ripple target="_blank" href="alexfriedl-personal-sheet-2019-deutsch.pdf">
        <v-list-tile-action>
          <v-icon>cloud_download</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Download CV</v-list-tile-title>
      </v-list-tile>
      <v-list-tile ripple target="_blank" href="https://calendly.com/alex-friedl/book-a-call">
        <v-list-tile-action>
          <v-icon>call</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Book a call</v-list-tile-title>
      </v-list-tile>
    </v-list>

    <div class="madewithLOVE">
      <span class="text">made with</span>
      <i class="heart"></i>
      <span class="text">by Alex</span>
    </div>
  </v-navigation-drawer>
</template>


<script>
import EventBus from "../event-bus.js";

export default {
  name: "sidebar",
  data() {
    return {
      isActive: true,
      items: this.$store.getters["allItems"],
      config: {
        dark: true,
        light: false,
        floating: true,
        hideOverlay: true,
        stateless: true,
        absolute: false,
        temporary: false
      },
      drawer: false
    };
  },
  methods: {},
  created() {
    let tablet = window.matchMedia("(min-width: 900px)");
    tablet.addListener(event => {
      this.drawer = true;
    });
    EventBus.$on("toggle", payload => {
      this.drawer = !this.drawer;
    });
  }
};
</script>

<style lang="scss">
#sidebar.v-navigation-drawer.theme--dark
  .v-list
  > [role="listitem"]
  .v-list__tile:not(.v-list__tile--active),
.v-list__group {
  opacity: 0.5;
}
#sidebar {
  &.v-navigation-drawer.theme--dark {
    background-color: rgba(0, 0, 0, 0.1);

    .v-list,
    .v-list__group__header__prepend-icon + [role="listitem"] a:hover {
      background-color: transparent;
    }

    .v-list {
      padding: 0;
    }
  }
  &.v-navigation-drawer.theme--dark {
    .primary--text.v-list__tile--active {
      color: white !important;
      background-color: transparent;
    }
  }
  .madewithLOVE {
    position: fixed;
    bottom: 16px;
    left: 16px;
    .text {
      opacity: 0.5;
      font-size: 14px;
    }
    .heart {
      margin: 0 6px;
      width: 16px;
      height: 16px;
      display: inline-block;
      background-image: url("../assets/svg/pixel-heart.svg");
      background-size: contain;
      color: white;
    }
  }

  .v-list__group__items .v-list__tile {
    flex-direction: column;
    align-items: flex-start;
    line-height: 14px;
  }

  .mobile,
  .tablet {
    .madewithLOVE {
      color: black;
    }
  }

  .v-list__group__header--sub-group .v-list__group__header__prepend-icon {
    visibility: hidden;
  }

  a.v-list__tile:hover {
    color: inherit;
  }
}
.v-toolbar__content {
  padding: 0 16px !important;
}
.v-toolbar__content .v-btn--icon,
.v-toolbar__extension .v-btn--icon {
  margin: 0 !important;
}
</style>