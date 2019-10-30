<template>
  <div id="showcase" class="content">
    <div class="grid grid-center grid-intro">
      <div class="item">
        <h1>
          <span>Showcase</span>
        </h1>
        <h2>since 2018</h2>
      </div>
    </div>
    <div class="container grid-list-md">
      <timeline></timeline>
    </div>
    <div class="container grid-list-md">
      <copyright></copyright>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#showcase {
  h1 {
    display: inline-flex;
    align-items: flex-start;
    flex-flow: row nowrap;
    position: relative;
  }

  .tablet,
  .mobile {
    .grid-intro {
      padding: 35px 15px;
    }
    .item p {
      margin: 35px 0 60px;
    }
  }
  .v-timeline:before {
    width: 4px;
  }
}
</style>

<script>
import Timeline from "@/libs/Timeline.vue";
import Copyright from "@/libs/Copyright.vue";

export default {
  name: "showcase",
  components: {
    Timeline,
    Copyright
  },
  data() {
    return {
      title: "Showcase"
    };
  }
};
</script>
