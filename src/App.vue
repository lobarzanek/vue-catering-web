<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/menu/Navbar.vue";
import Loading from "./components/content/loading/Loading.vue";
</script>

<template>
  <Navbar></Navbar>
  <RouterView name="default" v-slot="{ Component, route }">
    <Transition name="route" mode="out-in">
      <Suspense timeout="0">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
        <template #fallback>
          <Loading/>
        </template>
      </Suspense>
    </Transition>
  </RouterView>
</template>

<style scoped>

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
