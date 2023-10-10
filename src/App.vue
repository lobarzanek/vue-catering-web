<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/menu/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <RouterView v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style scoped>
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all .3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all .3s ease-in;
}
</style>
