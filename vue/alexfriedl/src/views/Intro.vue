<template>
  <div id="intro">
    <div class="wrapper">
      <div class="component">
        <avatar></avatar>
      </div>
      <div class="component dna">
        <h2>DNA</h2>
        <carousel :service="service.dna"></carousel>
      </div>
      <div class="component router">
        <router :service="service.router"></router>
      </div>
    </div>
    <logos class="test"></logos>
  </div>
</template>

<script>
import Logos from "@/components/Logos";
import Avatar from "@/components/Avatar";
import Carousel from "@/components/Carousel";
import Router from "@/components/Router";

import DNA from "@/services/dna.json";
import ROUTER from "@/services/router.dna.json";

export default {
  name: "Intro",
  components: {
    Avatar,
    Logos,
    Carousel,
    Router
  },
  data: () => ({
    service: {
      dna: DNA.items,
      router: ROUTER.items
    }
  }),
  methods: {}
};
</script>

<style lang="scss">
@import "@/styleguide/_colors.scss";
@import "@/styleguide/_breakpoints.scss";

.component h2 {
  color: $secondary;
}

#intro {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 100%;

  .dna {
    margin-top: 30px;
  }
  .application {
    background: transparent;
  }
  .wrapper {
    padding: 0 5%;
  }
  .dna {
    margin-top: 30px;
  }
}

@include phone-up {
  #intro {
    .wrapper {
      padding: 0 10%;
    }
    .dna {
      margin-top: 100px;
    }
  }
}
body {
  background-image: url("../assets/img/bg-alexfriedl.jpg");
  background-size: cover;
}
#webapp {
  background-color: rgba(black, 0.9) !important;
}
.logos {
  position: absolute;
  bottom: 50px;
}
</style>