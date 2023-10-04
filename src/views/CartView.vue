<script setup>
import { ref } from "vue";
import axios from "axios";
import { useCounterStore } from "@/stores/counter";
import ErrorHandler from "@/components/content/errorHandler/ErrorHandler.vue";
import ItemCard from "../components/content/cartpage/itemCard.vue";
import Summary from "../components/content/cartpage/summary.vue";

const counter = useCounterStore();
// counter.increment(1)
// counter.increment(1)
counter.increment(2);
counter.increment(2);
counter.increment(2);
counter.increment(3);
counter.increment(3);
counter.increment(3);
counter.increment(3);
console.log(counter.cartData);

const data = ref([]);
const eHandler = ref(true);

const getCartData = () => {
  axios.get("http://localhost:3000/diets").then((response) => {
    if (response.statusText == "OK") {
      eHandler.value = false;

      data.value = response.data.filter((e) => counter.cart.includes(e.id));
      data.value.map(
        (e) => (e.Count = counter.cart.filter((x) => x == e.id).length)
      );
    }
  });
};

getCartData();

// filteredCartData.value = data.value.filter((e) => counter.cart.includes(e.id));
// console.log(filteredCartData);
</script>

<template>
  <div class="errorHandler" v-if="eHandler">
    <ErrorHandler></ErrorHandler>
  </div>
  <div class="cart" v-else>
    <div class="items">
      <ItemCard
        v-for="(item, index) in data"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :currency="item.currency"
        :count="item.Count"
        :imgSrc="item.imgSrc"
        :imgAlt="item.imgAlt"
        :key="index"
      ></ItemCard>
    </div>
    <div class="summary" v-if="counter.count > 0">
      <Summary :cartData="data"></Summary>
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
