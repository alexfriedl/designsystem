<template>
  <div class="skillbar">
    <div class="inner">{{width}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      width: 0
    };
  }
};
</script>
<style lang="scss">
.skillbar {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid white;
  height: 16px;
  width: 100%;
  padding: 8px;
}
.inner {
  background: rgba(255, 255, 255, 0.75);
}
</style>