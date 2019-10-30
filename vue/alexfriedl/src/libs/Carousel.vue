<template>
  <mdb-container>
    <mdb-carousel
      :interval="8000"
      showControls
      showIndicators
      slide
      top
      navClass="btn-white"
      indicatorClass="white-color"
    >
      <mdb-carousel-item v-for="(row, i) in item.imagePaths.thumbnails" :key="i">
        <mdb-row class="mdb-lightbox px-2">
          <mdb-col
            md="3"
            class="d-md-inline-block"
            @click.native="showLightbox(i)"
            v-for="(path, i) in row"
            :key="i"
          >
            <figure>
              <img :src="`${path}`" class="img-fluid" alt>
            </figure>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
    </mdb-carousel>
    <mdb-lightbox
      :key="i"
      :visible="visible"
      :imgs="item.imagePaths.lightbox"
      :index="index"
      @hide="handleHide"
    ></mdb-lightbox>
  </mdb-container>
</template>

<script>
import {
  mdbCarousel,
  mdbCarouselItem,
  mdbCarouselCaption,
  mdbRow,
  mdbIcon,
  mdbContainer,
  mdbCol,
  mdbLightbox
} from "mdbvue";

export default {
  name: "CarouselProPage",

  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbRow,
    mdbIcon,
    mdbContainer,
    mdbCol,
    mdbLightbox
  },

  props: ["item"],

  data() {
    return {
      items: this.$store.getters["allItems"],
      visible: false,
      index: 0
    };
  },

  methods: {
    showLightbox(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>
<style lang="scss">
.carousel-indicators {
  bottom: -40px !important;
}
.container {
  padding: 0;
}
.carousel-control-prev {
  left: -70px !important;
}
.carousel-control-next {
  right: -70px !important;
}
</style>
