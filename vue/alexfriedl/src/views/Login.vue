<template>
  <v-app id="Login">
    <v-content>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md7 class="separator">
            <h1>Thanks</h1>
            <h4>for being interested in my Showcase</h4>
            <v-card class="elevation-4" light>
              <h5>Register to see my Showcase</h5>
              <v-card-text>
                <v-form>
                  <v-text-field
                    light
                    box
                    prepend-icon="person"
                    name="login"
                    v-model="email"
                    label="Email"
                    type="text"
                    placeholder="Email"
                    color="accent"
                  ></v-text-field>
                  <v-text-field
                    light
                    box
                    prepend-icon="lock"
                    name="password"
                    v-model="password"
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="********"
                    color="accent"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-container>
                <v-layout align-center space-between>
                  <v-flex xs12>
                    <v-btn light flat type="submit" disabled @click="handleSubmit">Register Account</v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn large color="accent" type="submit" @click="handleSubmit">Sign In</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-btn
            class="download"
            href="alexfriedl-personal-sheet-2019-deutsch.pdf"
            target="_blank"
            flat
            large
          >
            <v-icon class="icon">cloud_download</v-icon>Download CV 2019
          </v-btn>
        </v-layout>
        <router :service="service.router"></router>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Router from "@/components/Router";

import ROUTER from "@/services/router.login.json";
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    service: {
      router: ROUTER.items
    }
  }),
  components: {
    Router
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        this.$http
          .post("https://stark-river-77417.herokuapp.com/login", {
            UserEmail: this.email,
            UserPassword: this.password
          })
          .then(response => {
            if (response.status === 200) {
              if (response.data.is_sucess) {
                console.log("Welcome to my website");
                localStorage.setItem("jwt", response.data);
                this.$router.push("/showcase");
              }
            }
          })
          .catch(function(error) {
            console.error(error.response);
          });
      }
    }
  }
};
</script>

<style lang="scss" >
@import "@/styleguide/_breakpoints.scss";

#Login {
  @include phone-up {
    h4 {
      margin-bottom: 30px;
    }
  }
  h4 {
    margin-bottom: 16px;
    text-transform: uppercase;
    font-size: 16px;
  }
  h5 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    margin: 0 24px 16px;
    @include phone-only {
      margin-bottom: 0;
    }
  }
  &.theme--dark.application {
    background: transparent;
  }
  .v-sheet {
    padding: 28px 16px 16px;
  }

  .v-card__text {
    padding-bottom: 0;
  }

  .v-sheet {
    border-radius: 8px;
  }

  .v-sheet > .container {
    padding: 0;
  }

  .icon {
    padding-right: 8px;
  }

  .v-content__wrap .container {
    display: flex;
    align-items: center;
    height: 100%;
    @include phone-only {
      flex-direction: column;
    }
  }

  @include phone-only {
    .layout {
      flex-direction: column !important;
    }
    .flex.xs12 {
      flex-basis: auto;
    }
  }

  @include phone-up {
    .download {
      margin-left: 50px;
    }
    .separator {
      border-right: 2px solid rgba(255, 255, 255, 0.07);
      padding-right: 100px;
    }
  }
}
</style>