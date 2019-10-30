<template>
  <layout :item="item"></layout>
</template>

<script>
import Layout from "@/libs/Showcase.vue";

export default {
  components: {
    Layout
  },
  data() {
    return {
      items: this.$store.getters["allItems"]
    };
  },
  computed: {
    item() {
      return this.items.find(item => item.id === this.$route.params.id);
    }
  }
};
</script>