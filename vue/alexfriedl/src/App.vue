<template>
  <v-app id="webapp" :class="$mq" dark indigo >
    <toolbar></toolbar>
    <div class="grid grid-fullscreen">
      <!-- <mq-layout :mq="['laptop', 'desktop']"> -->
      <sidebar></sidebar>
      <!-- </mq-layout> -->
      <perfect-scrollbar>
        <router-view/>
      </perfect-scrollbar>
    </div>
  </v-app>
</template>

<script>
import Toolbar from "@/libs/Toolbar.vue";
import Sidebar from "@/libs/Sidebar.vue";

export default {
  name: "app",
  components: {
    Toolbar,
    Sidebar
  }
};
</script>

<style lang="scss">
@import "@/styleguide/styleguide.scss";

body .accent {
  background-color: $primary !important;
  border-color: $primary !important;
}
#webapp {
  font-family: Roboto, Arial;
  background: $primary;
}
.application--wrap .theme--dark.v-toolbar {
  background: transparent !important;
}

.content {
  margin: 0 !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  align-self: stretch;
  width: 100%;
}

.grid {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  width: 100%;

  &.grid-fullscreen {
    height: 100%;
  }

  > .item {
    flex: 1 1 auto;
  }
}

.ps {
  // Toolbar height
  height: calc(100vh - 48px);
  width: 100%;
  overflow: hidden;
}

.container,
.grid-intro {
  max-width: 1185px !important;
  margin: 0 auto;
}

html {
  overflow: hidden !important;
}
/*
 * Container style
 */
.ps {
  overflow: hidden !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
  -ms-touch-action: auto;
}
/*
 * Scrollbar rail styles
 */
.ps__rail-x {
  display: none;
  opacity: 0;
  transition: background-color 0.2s linear, opacity 0.2s linear;
  -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
  height: 15px;
  /* there must be 'bottom' or 'top' for ps__rail-x */
  bottom: 0px;
  /* please don't change 'position' */
  position: absolute;
}
.ps__rail-y {
  display: none;
  opacity: 0;
  transition: background-color 0.2s linear, opacity 0.2s linear;
  -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
  width: 15px;
  /* there must be 'right' or 'left' for ps__rail-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}
.ps--active-x > .ps__rail-x,
.ps--active-y > .ps__rail-y {
  display: block;
  background-color: transparent;
}
.ps:hover > .ps__rail-x,
.ps:hover > .ps__rail-y,
.ps--focus > .ps__rail-x,
.ps--focus > .ps__rail-y,
.ps--scrolling-x > .ps__rail-x,
.ps--scrolling-y > .ps__rail-y {
  opacity: 0.6;
}
.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
  background-color: #eee;
  opacity: 0.9;
}
/*
 * Scrollbar thumb styles
 */
.ps__thumb-x {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color 0.2s linear, height 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s linear, height 0.2s ease-in-out;
  height: 6px;
  /* there must be 'bottom' for ps__thumb-x */
  bottom: 2px;
  /* please don't change 'position' */
  position: absolute;
}
.ps__thumb-y {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color 0.2s linear, width 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;
  width: 6px;
  /* there must be 'right' for ps__thumb-y */
  right: 2px;
  /* please don't change 'position' */
  position: absolute;
}
.ps__rail-x:hover > .ps__thumb-x,
.ps__rail-x:focus > .ps__thumb-x,
.ps__rail-x.ps--clicking .ps__thumb-x {
  background-color: #999;
  height: 11px;
}
.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: #999;
  width: 11px;
}
/* MS supports */
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}
.ps {
  position: relative;
}
</style>