<template>
  <div id="RouterComponent">
    <v-btn class="prev" :disabled="service.prev.disabled" :href="service.prev.route" flat>
      <v-icon class="icon">arrow_back</v-icon>
      {{service.prev.label}}
    </v-btn>
    <v-btn class="next" :disabled="service.next.disabled" :href="service.next.route" flat>
      {{service.next.label}}
      <v-icon class="icon">arrow_forward</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "Router",
  props: ["service"],
  components: {},
  methods: {}
};
</script>
<style lang="scss">
@import "@/styleguide/_colors.scss";
#RouterComponent {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  a {
    padding: 8px 12px;
    color: $secondary;
    text-transform: uppercase;
    font-weight: 500;
    &[disabled] {
      opacity: 0.25;
      pointer-events: none;
    }
    &:hover:not([disabled]) {
      background: rgba(255, 255, 255, 0.07);
    }
  }
  .next {
    .icon {
      padding-left: 5px;
    }
  }
  .prev {
    .icon {
      padding-right: 5px;
    }
  }
}
</style>