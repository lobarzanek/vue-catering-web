<script setup>
import { useCounterStore } from "@/stores/counter";
import ItemCard from "@/components/content/cartpage/itemCard.vue";
import Summary from "@/components/content/cartpage/summary.vue";
import Empty from "@/components/content/cartpage/empty.vue";

const counter = useCounterStore();
</script>

<template>
  <div class="cart" v-if="counter.storeCounter.count > 0">
    <div class="items">
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
    <div class="summary">
      <Summary></Summary>
    </div>
  </div>
  <div class="cart" v-else>
    <Empty></Empty>
  </div>
</template>

<style scoped lang="scss">
.cart {
  display: flex;
  justify-content: center;
  flex-direction: column;
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

@import "@/views/CartView/_mediaCartView.scss";
</style>
