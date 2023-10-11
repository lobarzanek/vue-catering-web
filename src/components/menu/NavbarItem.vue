<script setup>
import { useCounterStore } from "@/stores/counter";

defineProps({
  iconSrc: {
    type: String,
    default: () => "",
  },
  counter: {
    type: Boolean,
    default: () => false,
  },
});

const store = useCounterStore();
</script>

<template>
  <div class="navbarItem">
    <img :src="iconSrc" alt="" />
    <div
      class="counter"
      v-if="counter === true && store.storeCounter.count > 0"
    >
      {{ store.storeCounter.count }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbarItem {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #d8d8d8;

  &:hover {
    cursor: pointer;
    background-color: #a1a1a1;
  }
  img {
    width: 24px;
    filter: invert(0%) sepia(98%) saturate(9%) hue-rotate(160deg)
      brightness(94%) contrast(103%);
  }

  .counter {
    position: absolute;
    right: -5px;
    top: -5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: red;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    color: #fff;
    font-weight: bold;
  }
}
</style>
