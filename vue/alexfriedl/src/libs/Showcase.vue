<template>
  <div class="content" v-bind:id="item.id">
    <div v-bind:class="[item.template, item.templateType]">
      <div class="item">
        <h1>
          <span>{{item.title}}</span>
          <span class="client client-special">{{item.client}}</span>
        </h1>
        <h2>{{item.subtitle}}</h2>
        <h3 v-if="item.templateType === 'half'" v-html="item.description"></h3>
        <ul v-if="item.templateType === 'half'">
          <li v-for="(step, i) in item.descriptionList" :key="i">
            <span>{{step[1]}}</span>
            <span class="label">{{step[0]}}</span>
          </li>
        </ul>

        <p class="action">
          <v-btn
            v-for="(step, i) in item.actionList"
            :key="i"
            class="decent"
            v-bind:href="step.url"
            v-bind:target="step.target"
            v-bind:depressed="step.depressed"
            v-bind:flat="step.flat"
            v-bind:dark="step.dark"
            v-bind:large="step.large"
            v-bind:color="step.color"
          >
            <span>{{step.title}}</span>
          </v-btn>
        </p>
        <div class="teaser">
          <img class="visual" v-if="item.templateType === 'full'" v-bind:src="item.imagePath">
          <div class="action">
            <v-btn
              v-bind:depressed="false"
              v-bind:flat="item.actionList[0].flat"
              v-bind:dark="item.actionList[0].dark"
              v-bind:color="item.actionList[0].color"
              @click="confirm = true"
            >
              <span class="more">
                <i class="adobe"></i>Prototyp ansehen
              </span>
            </v-btn>
          </div>
        </div>
      </div>
      <div v-if="item.templateType === 'half'" class="item">
        <img v-bind:src="item.imagePath">
      </div>
    </div>
    <div id="process" class="container grid-list-md">
      <h2>UX and Usablity Methods</h2>
      <process :item="item"></process>
    </div>
    <div class="container grid-list-md">
      <h2>Showcase</h2>
      <upsell :item="item"></upsell>
    </div>
    <div class="container grid-list-md">
      <copyright></copyright>
    </div>
    <mdb-container>
      <!-- confirm modal -->
      <mdb-modal :show="confirm" @close="confirm = false" size="sm" class="text-center" info>
        <mdb-modal-header :close="false">
          <p class="heading">Copy to clipboard</p>
        </mdb-modal-header>
        <mdb-modal-body>
          <span class="password">
            <span>Password&nbsp;</span>
            <span>madewithLOVE&lt;3</span>
          </span>
        </mdb-modal-body>
        <mdb-modal-footer>
          <v-btn
            @click="confirm = false"
            v-bind:href="item.actionList[0].adobe"
            v-bind:depressed="false"
            v-bind:flat="item.actionList[0].flat"
            v-bind:dark="item.actionList[0].dark"
            v-bind:color="item.actionList[0].color"
            v-bind:target="_blank"
          >Go to prototype</v-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </mdb-container>
  </div>
</template>

<script>
import Copyright from "@/libs/Copyright.vue";
import Upsell from "@/libs/Upsell.vue";
import Process from "@/libs/Process.vue";

import {
  mdbRow,
  mdbBtn,
  mdbIcon,
  mdbModal,
  mdbModalHeader,
  mdbModalBody,
  mdbModalFooter
} from "mdbvue";

export default {
  components: {
    Upsell,
    Copyright,
    Process,
    mdbRow,
    mdbBtn,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter
  },
  props: ["item"],
  methods: {
    test: () => {
      console.log("test");
    }
  },
  data() {
    return {
      confirm: false
    };
  }
};
</script>
<style lang="scss" scoped>

@import "@/styleguide/_colors.scss";

.modal-dialog.modal-notify.modal-info .modal-header {
  background-color: $primary !important;
}
h1 {
  display: inline-flex;
  align-items: flex-start;
  flex-flow: row nowrap;
  position: relative;

  .client {
    order: 1;
    background: rgba(255, 255, 255, 0.22);
    padding: 5px 8px;
    font-size: 12px;
    border-radius: 3px;
    color: white;
    position: absolute;
    margin-top: -8px;
    right: 0;
    transform: translateX(100%);
  }
}

.grid {
  &.grid-half > .item:first-child {
    max-width: 320px;
  }
  &.grid-half > .item:last-child {
    align-self: flex-end;
    max-width: 500px;
    margin-left: 50px;
    margin-right: 100px;
  }
  &.grid-intro {
    padding: 100px 60px 60px;
  }
  &.grid-center {
    text-align: center;
  }
}

.tablet,
.mobile {
  .grid-intro {
    padding: 35px 15px;
  }
  .item p {
    margin: 35px 0 60px;
  }
  h1 span:first-child {
    font-size: 40px;
  }
}

.item {
  p {
    margin: 60px 0 70px;
  }
  img {
    width: 100%;
  }
  ul {
    padding: 0;
    list-style: none;
    line-height: 24px;

    li {
      display: flex;
      flex-flow: column nowrap;
      line-height: 18px;

      &:not(:first-child) {
        margin-top: 20px;
      }
    }
  }
  .label {
    opacity: 0.5;
  }
}

.desktop {
  .item img {
    max-width: 80%;
  }
}
.action > * {
  margin: 0 !important;
}
.teaser {
  transition: all 0.25s ease-in-out;
  opacity: 1;
  position: relative;

  .visual {
    transition: all 0.25s ease-in-out;
    opacity: 1;
  }

  .action {
    transition: all 0.25s ease-in-out;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translatex(-50%);
    opacity: 0;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;

    img {
      opacity: 0.7;
    }

    .action {
      opacity: 1;
      top: 40%;
      transform: translate(-50%, -50%);
      &:hover {
        opacity: 1;
      }
    }
  }
}

.more {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.adobe {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIxLjUiIGhlaWdodD0iODkuNjEiIHZpZXdCb3g9IjAgMCAxMjEuNSA4OS42MSI+ICA8ZGVmcz4gICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPiAgICAgIDxwYXRoIGlkPSJQZmFkXzY1NyIgZGF0YS1uYW1lPSJQZmFkIDY1NyIgZD0iTTAsLjM5SDEyMS41VjkwSDBaIi8+ICAgIDwvY2xpcFBhdGg+ICA8L2RlZnM+ICA8ZyBpZD0iY2MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTAuMzkpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+ICAgIDxwYXRoIGlkPSJQZmFkXzY1NiIgZGF0YS1uYW1lPSJQZmFkIDY1NiIgZD0iTTEyMS41LDQzLjE5NXY0Yy0uMDM4LjIxNy0uMDg2LjQzLS4xMTEuNjQ2LS4yMDcsMS43NC0uMzQxLDMuNDkxLS42MjcsNS4yMThhNDIuNjkxLDQyLjY5MSwwLDAsMS01Ljk1MywxNS42NTRBNDQuNTE2LDQ0LjUxNiwwLDAsMSw5Ni4zNTQsODUuNDM2YTQzLjE2OSw0My4xNjksMCwwLDEtMTQuMjM2LDQuMmMtMS4xLjEyNy0yLjIuMjQxLTMuMy4zNjJIMzYuMTM1YTUuMzQxLDUuMzQxLDAsMCwwLS42NDYtLjExN0EzNi40LDM2LjQsMCwwLDEsMjMuMSw4Ni45LDM3LjgsMzcuOCwwLDAsMSwzLjksNjguNjYxLDM1Ljg4NCwzNS44ODQsMCwwLDEsLjM1OCw1Ni44NnEtLjE4Mi0xLjUtLjM1OC0zVjQ5Ljk4NGE1LjE4Niw1LjE4NiwwLDAsMCwuMTE3LS42NDYsMzUuNzU1LDM1Ljc1NSwwLDAsMSwyLjMzNS0xMC44M0EzNy43ODQsMzcuNzg0LDAsMCwxLDIxLjM3NiwxNy43YTM3LjA3NSwzNy4wNzUsMCwwLDEsMTQuODE5LTMuODMxLDQxLjE2NCw0MS4xNjQsMCwwLDEsNy42MTIuMzQ5Ljk2MS45NjEsMCwwLDAsLjcxOC0uMjM0QTQ1LjAwOSw0NS4wMDksMCwwLDEsNTYuOTY2LDQuOTczLDQzLjUzNyw0My41MzcsMCwwLDEsNzEuMjcyLjc1NUM3Mi40NTIuNjIsNzMuNjM1LjUwOSw3NC44MTcuMzg3aDMuNjM5Yy4yMzguMDM3LjQ3Ny4wNzkuNzE1LjEwNywxLjguMjEsMy42MTYuMzQyLDUuNC42NDFhNDIuODA3LDQyLjgwNywwLDAsMSwxNS41NTksNS45MDYsNDQuNTE3LDQ0LjUxNywwLDAsMSwxNi44LDE4LjQ4Nyw0My4wNjcsNDMuMDY3LDAsMCwxLDQuMjA1LDE0LjI0NmMuMTMsMS4xNDEuMjQxLDIuMjgyLjM2MiwzLjQyMU01My41NjUsMTcuMzEyYy4wNzMuMS4wOTEuMTQxLjEyMi4xNTZhNDguNjEzLDQ4LjYxMywwLDAsMSw3LjEzOSw0LjMxNy43NTEuNzUxLDAsMCwwLC42NjYtLjA0OCwyOC4wNDEsMjguMDQxLDAsMCwxLDM3LjMsNi40MTksMjYuNTIxLDI2LjUyMSwwLDAsMSw1LjQ5NCwyMS42MTFBMjcuNzA1LDI3LjcwNSwwLDAsMSw5Ny41NSw2NC4wMDljLTYuNjgsNy4zNjctMTUuMDQ1LDEwLjQxNC0yNC44OTIsOS4xMjRhMjYuMjgsMjYuMjgsMCwwLDEtMTUuNjI2LTcuNzg2QzUxLjQ3Myw1OS43MzIsNDUuODc4LDU0LjE1NCw0MC4zLDQ4LjU1NGE0LjUxMSw0LjUxMSwwLDAsMC0yLjY0LTEuNDc3LDQuMTk0LDQuMTk0LDAsMCwwLTQuMzcyLDIuMzgzLDMuODY5LDMuODY5LDAsMCwwLC45MzUsNC43MjVjNi4yMTUsNi4xLDEyLjM3NSwxMi4yNTgsMTguNTgzLDE4LjM2NWEzMC4wMDUsMzAuMDA1LDAsMCwwLDMuNDA5LDIuOUEzMi42MiwzMi42MiwwLDAsMCw3MS40LDgxLjNhMzYuNjMyLDM2LjYzMiwwLDAsMCwxMi45MzctLjUxMSwzNi40ODUsMzYuNDg1LDAsMCwwLDI4LjIzMS0zMC43LDM1LjgxLDM1LjgxLDAsMCwwLS4zMzItMTEuNzQ5LDM0Ljg3NSwzNC44NzUsMCwwLDAtOC4yLTE2LjgxNUM5NS44NDgsMTIuMzM0LDg1LjU0OCw4LjIzLDczLjI5MSw5LjE0NkEzNC4xNTcsMzQuMTU3LDAsMCwwLDU5LjkxOSwxMy4wOGEzNS4yODUsMzUuMjg1LDAsMCwwLTYuMzU0LDQuMjMybS0zLDY0LjE3NnEtLjI1My0uMjM0LS41LS40NzFjLTIuNTQxLTIuNC01LjEtNC43ODMtNy42MDctNy4yMTNhMi4wNTgsMi4wNTgsMCwwLDAtMS42MjEtLjY4MywzMC44LDMwLjgsMCwwLDEtNy41OTQtLjQ5MywyMS4yNTEsMjEuMjUxLDAsMCwxLDguNDM0LTQxLjY0MywyMC42LDIwLjYsMCwwLDEsMTEuNTE1LDUuOTZjMy44OTQsNC4wMiw3LjksNy45MjUsMTEuODQsMTEuOWEzLjUzNywzLjUzNywwLDAsMCwzLjE2NiwxLjE0MiwzLjk3OSwzLjk3OSwwLDAsMCwzLjQ2MS0yLjU2NiwzLjc4OSwzLjc4OSwwLDAsMC0uODc5LTQuMmMtNC4xMzEtNC4xODUtOC4xNjQtOC40NzUtMTIuNDYyLTEyLjQ4Mi04LjMzNi03Ljc3NS0xOC4xNjYtMTAuMDg3LTI5LjAzOC02Ljc4MUEyOS40NzQsMjkuNDc0LDAsMCwwLDM4LjI0OCw4MS41MnE1LjgxOS4wMDYsMTEuNjM4LDBjLjE5MiwwLC4zODQtLjAxNy42OC0uMDMyIiBmaWxsPSIjZmZmIi8+ICA8L2c+PC9zdmc+);
  background-size: contain;
  background-position: 0 0;
  width: 40px;
  height: 21px;
  display: inline-block;
}

.modal-footer .accent {
  background-color: $primary !important;
  border-color: $primary !important;
}

.accent.decent {
  background-color: transparent !important;
  &:before {
    border-radius: inherit;
    color: inherit;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    opacity: 0.12;
    -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
    background-color: currentColor;
  }
}

.content {
  overflow-y: scroll;
  height: 100%;
}

.password {
  margin-top: 25px !important;
  display: block;
  font-weight: 500;
  text-align: left;
  span:first-child {
    display: block;
    opacity: 0.5;
  }
  span:last-child {
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding: 3px 6px;
    display: inline-block;
    color: rgb(63, 82, 181);
  }
}

h3 {
  margin: 30px 0;
  line-height: 20px;
  font-weight: 400;
}
</style>