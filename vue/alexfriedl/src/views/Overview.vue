<template>
  <div id="overview">
    cool
    <logos></logos>
  </div>
</template>

<style>
</style>

<script>
import Logos from "@/components/Logos";
import Copyright from "@/libs/Copyright";
import Upsell from "@/libs/Upsell";
import Skillbar from "@/libs/Skillbar";
import Timeline from "@/libs/Timeline";

export default {
  name: "overview",
  data() {
    return {
      title: "Overview"
    };
  }
};
</script>
