<template>
  <v-toolbar dark flat dense id="Toolbar">
    <mq-layout :mq="['mobile', 'tablet', 'laptop', 'desktop']">
      <v-toolbar-side-icon @click.stop.prevent="toggleNav()"></v-toolbar-side-icon>
    </mq-layout>
    <v-toolbar-title class="white--text" style="display:none;">Showcase</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="contact">
      <span class="phone">
        <v-icon small class="icon">call</v-icon>
        <a href="tel:+49-157-58150846">+49-157-58150846</a>
      </span>
      <span class="mail">
        <v-icon small class="icon">mail</v-icon>
        <a href="mailto:hi@alexfriedl.com">hi@alexfriedl.com</a>
      </span>
    </div>
    <v-menu bottom left light>
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile ripple v-for="(item, i) in items" :key="i">
          <v-list-tile-title>
            <span v-html="item.icon"></span>
            <a class="item" :target="`${item.target}`" :href="`${item.route}`">{{ item.title }}</a>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import EventBus from "../event-bus.js";

export default {
  name: "toolbar",
  data: () => ({
    drawer: true,
    items: [
      {
        title: "Download CV",
        route: "alexfriedl-personal-sheet-2019-deutsch.pdf",
        target: "_blank",
        icon:
          '<i aria-hidden="true" class="v-icon icon material-icons theme--light" style="font-size: 16px;">cloud_download</i>'
      },
      {
        title: "Book a call",
        route: "https://calendly.com/alex-friedl/book-a-call",
        target: "_blank",
        icon:
          '<i aria-hidden="true" class="v-icon icon material-icons theme--light" style="font-size: 16px;">call</i>'
      },
      {
        title: "Message me",
        route: "mailto:hi@alexfriedl.com",
        target: "_self",
        icon:
          '<i aria-hidden="true" class="v-icon icon material-icons theme--light" style="font-size: 16px;">mail</i>'
      }
    ]
  }),
  methods: {
    toggleNav() {
      EventBus.$emit("toggle");
    }
  }
};
</script>

<style lang="scss">
@import "@/styleguide/_breakpoints.scss";
.v-menu__content {
  .item {
    color: rgba(0, 0, 0, 0.87) !important;
  }
  i {
    margin-right: 6px;
  }
}
#Toolbar {
  .contact a {
    color: white;
  }
  .contact .icon {
    margin-right: 6px;
  }
  .contact > *:not(.phone) {
    display: none;
  }
  @include phone-up {
    .contact > *:not(.phone) {
      display: inline;
    }
  }
}
.v-navigation-drawer--close {
  width: 0 !important;
}
.contact {
  cursor: pointer;

  > * {
    margin: 0 8px;
    opacity: 0.7;
    transition: all ease-in-out 0.15s;
    &:hover {
      opacity: 1;
    }
  }
}
</style>