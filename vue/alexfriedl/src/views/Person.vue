<template>
  <div id="person">
    <div class="wrapper">
      <div class="component">
        <h2>Person</h2>
      </div>
      <div class="component">
        <tabs></tabs>
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

import ROUTER from "@/services/router.person.json";

export default {
  name: "Person",
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

#person .wrapper {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  @include phone-only {
    padding: 0 5%;
  }
}

.component h2 {
  color: $secondary;
}

#person {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 100%;
}

.logos {
  position: absolute;
  bottom: 50px;
}
</style>