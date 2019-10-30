<template>
  <mq-layout :mq="['laptop', 'desktop']" id="LogosComponent">
    <div id="Logos"></div>
  </mq-layout>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#Logos {
  background-image: url("../assets/img/logos.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 95%;
  height: 55px;
  opacity: 0.1;
  margin: 0 auto;
}
</style>
