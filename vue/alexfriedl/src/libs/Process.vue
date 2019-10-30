<template>
  <div>
    <h3>Human Centered Design Process</h3>
    <v-timeline dark dense clipped>
      <v-timeline-item class="mb-3" small v-for="(step, i) in item.process" :key="i">
        <v-layout justify-space-between>
          <v-flex xs10 md10 lg8>
            <div class="step">
              <h2>{{step.title}}</h2>
              <h3>{{step.subtitle}}</h3>
            </div>
            <div class="description" v-if="(step.description)">
              <div v-html="step.description"></div>
            </div>
            <div class="methods" v-for="(step, i) in step.gallery" :key="i">
              <div class="method">
                <span>{{step.title}}</span>
                <span class="amount">
                  <span>{{step.amount}}</span>
                </span>
              </div>
              <carousel :item="step"></carousel>
            </div>
          </v-flex>
        </v-layout>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>



<script>
import Carousel from "@/libs/Carousel.vue";

export default {
  name: "Process",
  components: {
    Carousel
  },
  props: ["item"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.v-timeline {
  margin: 60px 0;
  &:before {
    width: 4px;
  }
}
.container {
  padding-top: 0 !important;
}
.v-timeline-item__body {
  text-align: left !important;
}
// .subline {
//   display: block;
//   opacity: 0.5;
// }
img,
a {
  width: 100%;
}
.visual {
  margin-top: 10px;
  display: block;
}
.description,
.methods {
  margin: 30px 0;
}
.methods {
  background: rgba(255, 255, 255, 0.08);
  padding: 24px 48px;
}
.carousel-indicators {
  justify-content: flex-start !important;
  margin-left: 0 !important;
}
.v-timeline-item {
  padding: 24px 0 !important;
}
.theme--dark.v-timeline .v-timeline-item__dot {
  background: rgba(255, 255, 255, 0.2) !important;
  box-shadow: none !important;
}
.v-timeline-item__dot {
  align-self: inherit !important;
  margin-top: 10px;
}
.amount {
  order: 1;
  background: rgba(255,255,255,.15);
  padding: 0 5px;
  font-size: 10px;
  border-radius: 3px;
  color: white;
  position: absolute;
  margin-top: -4px;
  right: 0px;
  transform: translateX(100%);
}
.method {
  position: relative;
  display: inline-block;
  margin-bottom: 14px;
  font-weight: 500;
}
.startDate {
  opacity: 0.5;
}
</style>