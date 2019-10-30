<template>
  <div id="process">
    <div class="wrapper">
      <div class="component">
        <h2>Prozess</h2>
      </div>
      <div class="component">
        <object data="/svg/process.svg" class="svg process" type="image/svg+xml"></object>
      </div>
      <div class="component router">
        <router :service="service.router"></router>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs";
import Router from "@/components/Router";

import ROUTER from "@/services/router.process.json";

export default {
  name: "Process",
  components: {
    Tabs,
    Router
  },
  data: () => ({
    service: {
      router: ROUTER.items
    }
  }),
  methods: {}
};
</script>

<style lang="scss">
@import "@/styleguide/_colors.scss";
@import "@/styleguide/_breakpoints.scss";

#process .wrapper {
  max-width: 900px;
  margin: 0 auto;
  @include phone-only {
    padding: 0 5%;
  }
}

.component h2 {
  color: $secondary;
}

#process {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 100%;
}

#process .application {
  background: transparent;
}
.logos {
  position: absolute;
  bottom: 50px;
}
.component {
  position: relative;
}
object.process {
  max-width: 900px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  @include phone-up {
    padding: 5%;
  }
  @include phone-only {
    width: 100%;
  }
}
</style>