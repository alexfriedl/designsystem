<template>
  <v-item-group id="upsell">
    <h3>asdf</h3>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex v-for="(item, i) in items" :key="i" xs12 sm6 md3>
          <v-item>
            <v-hover>
              <v-card
                :to="{path: '/showcase/' + item.id}"
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
              >
                <v-img :aspect-ratio="16/9" v-bind:src="item.imagePath"></v-img>
                <v-card-title>
                  <span class="title">{{item.title}}</span>
                  <span class="subtitle">{{ item.subtitle }}</span>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
</template>
<script>
export default {
  name: "upsell",
  props: ["item"],

  data() {
    return {
      items: this.$store.getters["allItems"]
    };
  }
};
</script>
<style lang="scss" scoped>
#upsell {
  .v-card {
    background: transparent;
    padding: 16px;
    transition: all ease-in-out 0.15s;
    opacity: 1;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 0;
    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.12);
    }
  }
  .elevation-2 {
    box-shadow: none !important;
  }
  .elevation-12 {
    box-shadow: none;
  }
  .v-card__title {
    padding-bottom: 0;
  }
  .title,
  .subtitle {
    width: 100%;
  }
  .container {
    padding-left: 0;
    padding-right: 0;
  }
  .container.grid-list-md .layout .flex {
    padding: 8px;
  }
}
</style>
