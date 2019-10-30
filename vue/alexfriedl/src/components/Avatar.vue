<template>
  <div id="User">
    <div class="user">
      <div class="avatar"></div>
      <div class="description">
        <div class="name">Alex Friedl</div>
        <div class="location">
          <v-icon small>location_on</v-icon>Nuremberg
        </div>
      </div>
    </div>
    <div class="job">
      <h1 class="label">User Experience Designer</h1>
      <span class="slogan">Data driven @Schaeffler AG</span>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "@/styleguide/_breakpoints.scss";

#User {
  display: flex;
  flex-flow: row nowrap;
  .job {
    margin-left: 16px;
  }
  .label {
    max-width: 500px;
  }
}
.slogan {
  opacity: 0.5;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 26px;
}
.name {
  font-weight: 500;
  font-size: 18px;
}
.user {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.description {
  margin-top: 8px;
}
.location {
  opacity: 0.5;
  font-weight: 400;
}
.avatar {
  background-image: url("../assets/img/avatar.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 90px;
  height: 90px;
  border: 2px solid white;
  border-radius: 100%;
}

@include phone-up {
  .name {
    font-size: 20px;
  }
  .slogan {
    font-size: 20px;
  }
}
</style>
