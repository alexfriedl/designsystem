<template>
  <v-timeline id="timeline" dark>
    <v-timeline-item v-for="(item, i) in items" :key="i" small>
      <template v-slot:opposite>
        <span class="headline duration" v-text="item.duration"></span>
        <span class="subline" v-text="`${item.dates}`"></span>
      </template>
      <div class="py-3">
        <h2 class="headline">{{item.title}}</h2>
        <div class="subline">{{item.subtitle}}</div>
        <a class="visual" :href="`#/showcase/${item.id}`">
          <img :src="item.imagePath" :title="item.title" :alt="item.title">
        </a>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  name: "Timeline",
  data() {
    return {
      items: this.$store.getters["allItems"]
    };
  }
};
</script>
<style lang="scss" scoped>
#timeline {
  h2 {
    margin-bottom: 0;
  }
  .container {
    padding-top: 0;
  }
  .v-timeline {
    max-width: 760px;
    margin: 60px auto 0;
  }
  .v-timeline-item__body {
    text-align: left;
  }
  .subline {
    display: block;
    opacity: 0.5;
  }
  img,
  a {
    width: 100%;
  }
  .visual {
    margin-top: 10px;
    display: block;
  }
}
</style>