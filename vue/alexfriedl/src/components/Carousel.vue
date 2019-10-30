<template>
  <mdb-container id="CarouselComponent" class="carousel">
    <mq-layout :mq="['laptop', 'desktop']">
      <mdb-carousel :interval="8000" showControls slide multi :items="service.length">
        <template v-for="(row, i) in service">
          <div :key="i">
            <mdb-row class="carousel__item">
              <mdb-col md="3" v-for="(item, i) in row" :key="i">
                <div class="carousel--teaser">
                  <object :data="`${item.svgPath}`" class="svg" type="image/svg+xml"></object>
                  <span class="title">{{item.title}}</span>
                </div>
              </mdb-col>
            </mdb-row>
          </div>
        </template>
      </mdb-carousel>
    </mq-layout>
    <mq-layout :mq="['mobile', 'tablet']">
      <mdb-carousel :interval="8000" showControls slide class="mobileCarousel" multi>
        <template>
          <div class="mobileCarouselItems" v-for="(item, i) in service[0]" :key="i">
            <div class="carousel--teaser">
              <object :data="`${item.svgPath}`" class="svg" type="image/svg+xml"></object>
              <span class="title">{{item.title}}</span>
            </div>
          </div>
        </template>
      </mdb-carousel>
    </mq-layout>
  </mdb-container>
</template>
<script>
import {
  mdbMultiCarousel,
  mdbCarouselItem,
  mdbContainer,
  mdbRow,
  mdbCol
} from "mdbvue";
export default {
  name: "Carousel",
  props: ["service"],
  components: {
    mdbMultiCarousel,
    mdbCarouselItem,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>
<style lang="scss">
@import "@/styleguide/_breakpoints.scss";

@include laptop-only {
  .carousel--teaser .title {
    font-size: 16px !important;
  }
}

.carousel__item {
  align-items: stretch;
  .carousel--teaser {
    height: 100%;
  }
}

.mobileCarousel > *,
.carousel-multi-item > *,
.mobileCarouselItems {
  display: block !important;
}
.mobileCarousel {
  .carousel-control-next {
    right: 0 !important;
  }
  .carousel-control-prev {
    left: 0 !important;
  }
}
.carousel .d-none {
  display: block !important;
}
.carousel--teaser {
  background: rgba(255, 255, 255, 0.07);
  padding: 16px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 120px;
}
.carousel--teaser .title {
  margin-top: 18px;
}
.carousel--teaser .svg {
  width: 50px;
  height: 50px;
}
.carousel.container {
  max-width: inherit !important;
  padding: 0 !important;
}
.controls-top {
  display: none !important;
}
.job {
  letter-spacing: 3px;
}
</style>