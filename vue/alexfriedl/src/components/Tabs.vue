<template>
  <mdb-tabs
    id="TabsComponent"
    :active="0"
    tag="div"
    color="transparent"
    transitionStyle="ease-in"
    :transition-duration="0.5"
    :links="[
      { text: 'Design' },
      { text: 'Code' },
      { text: 'Wesen' }
      ]"
  >
    <template :slot="'Design'">
      <chartRadar :service="service.design"></chartRadar>
    </template>
    <template :slot="'Code'">
      <chartRadar :service="service.code"></chartRadar>
    </template>
    <template :slot="'Wesen'">
      <chartRadar :service="service.wesen"></chartRadar>
    </template>
  </mdb-tabs>
</template>


<script>
import { mdbTabs } from "mdbvue";
import ChartRadar from "@/components/ChartRadar";

import DESIGN from "@/services/person.design.json";
import CODE from "@/services/person.code.json";
import WESEN from "@/services/person.wesen.json";

export default {
  name: "Tabs",
  components: {
    mdbTabs,
    ChartRadar
  },
  data: () => ({
    service: {
      design: DESIGN.items,
      code: CODE.items,
      wesen: WESEN.items
    }
  }),
  methods: {}
};
</script>
<style lang="scss">
#TabsComponent {
  .tab-content {
    padding: 5rem 1rem;
  }
}

h2 {
  margin-bottom: 32px;
}
.nav-link {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  opacity: 0.25;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  letter-spacing: 1.5px;
  &:hover {
    opacity: 1;
    color: white;
    border-bottom: 3px solid rgba(255, 255, 255, 0.25);
  }
}
.nav-link.active {
  color: #1ab28e;
  background: rgba(255, 255, 255, 0.07);
  border-bottom: 3px solid #1ab28e;
  opacity: 1;
}
</style>