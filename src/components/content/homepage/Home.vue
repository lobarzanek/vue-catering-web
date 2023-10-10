<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  id: {
    type: Number,
    default: () => "",
  },
})
</script>

<template>
  <RouterLink to="/diet" class="button">ss</RouterLink>
</template>

<style scoped lang="scss">
.button{
  background-color: red;
}
</style>