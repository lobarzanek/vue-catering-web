<script setup>
import { ref } from "vue";
import DietCard from "../components/content/dietpage/DietCard.vue";

const data = ref([]);
data.value = [
  {
    id: 1,
    title: "Dieta 1500kcal",
    description: "dieta dla małych",
    mealsCount: 5,
    price: 100,
    currency: "PLN",
    imgSrc: "../../../images/card-image150x150.png",
  },
  {
    id: 2,
    title: "Dieta 2000kcal",
    description: "dieta dla średnich",
    mealsCount: 5,
    price: 200,
    currency: "PLN",
    imgSrc: "../../../images/card-image150x150.png",
  },
  {
    id: 3,
    title: "Dieta 2500kcal",
    description: "dieta dla dużych",
    mealsCount: 5,
    price: 300,
    currency: "PLN",
    imgSrc: "../../../images/card-image150x150.png",
  },
];
</script>

<template>
  <div class="dietView">
    <h1>Nasze diety:</h1>
    <div class="dietCards">
      <DietCard
        v-for="(item, index) in data"
        :title="item.title"
        :description="item.description"
        :meals-count="item.mealsCount"
        :price="item.price"
        :currency="item.currency"
        :imgSrc="item.imgSrc"
        :key="index"
      ></DietCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dietView {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  .dietCards {
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    gap: 100px;
  }
}
</style>
