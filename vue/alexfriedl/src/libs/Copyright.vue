<template>
  <v-footer height="auto">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" color="white" flat round>{{ link }}</v-btn>
      <v-flex  text-xs-center white--text xs12>
        &copy;2019 —
        <strong>alexfriedl.com</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: ["Home", "Skills", "Showcase", "Download CV", "Imprint", "Contact me"]
  })
};
</script>
<style lang="scss" scoped>
.v-footer {
  padding: 60px 0;
  background: transparent !important;
}
</style>