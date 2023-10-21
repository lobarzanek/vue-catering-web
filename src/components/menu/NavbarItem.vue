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
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #d8d8d8;

  &:hover {
    cursor: pointer;
    background-color: #a1a1a1;
  }
  img {
    width: 18px;
  }

  .counter {
    position: absolute;
    right: -5px;
    top: -5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: red;
    text-align: center;
    font-size: 10px;
    line-height: 16px;
    color: #fff;
    font-weight: bold;
  }
}

@import "@/components/menu/_mediaNavbarItem.scss";
</style>
