<script setup>
import { ref } from "vue";
import axios from "axios";
import DietCard from "../components/content/dietpage/DietCard.vue";

const data = ref([]);

const getDietsData = () => {
  axios.get("http://localhost:3000/diets").then((response) => {
    data.value = response.data;
  });
};
getDietsData();
</script>

<template>
  <div class="dietView">
    <h1>Nasze diety:</h1>
    <div class="dietCards">
      <DietCard
        v-for="(item, index) in data"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :meals-count="item.mealsCount"
        :price="item.price"
        :currency="item.currency"
        :imgSrc="item.imgSrc"
        :imgAlt="item.imgAlt"
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
