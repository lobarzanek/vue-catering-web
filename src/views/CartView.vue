<script setup>
import { useCounterStore } from "@/stores/counter";
import ItemCard from "../components/content/cartpage/itemCard.vue";
import Summary from "../components/content/cartpage/summary.vue";
import Empty from "../components/content/cartpage/empty.vue";

const counter = useCounterStore();
</script>

<template>
  <div class="cart">
    <div class="items" v-if="counter.storeCounter.count > 0">
      <ItemCard
        v-for="(item, index) in counter.cartData"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :mealsCount="item.mealsCount"
        :price="item.price"
        :currency="item.currency"
        :imgSrc="item.imgSrc"
        :imgAlt="item.imgAlt"
        :key="index"
      ></ItemCard>
    </div>
    <Empty v-else></Empty>
    <div class="summary">
      <Summary></Summary>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 50px;
  .items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 2;
    gap: 30px;
    margin-bottom: 20px;
  }

  .summary {
    display: flex;
    flex-grow: 2;
  }
}
</style>
