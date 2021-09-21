<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent} from "vue";

export default defineComponent({
  name: "App", 
  components: {
    IonApp, IonRouterOutlet 
  }
});
</script>

<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
