<script setup>
import { ref } from "vue";
import axios from "axios";
import DietCard from "../components/content/dietpage/DietCard.vue";
import ErrorHandler from "@/components/content/errorHandler/ErrorHandler.vue";

const data = ref([]);
const eHandler = ref(true);

const getDietsData = () => {
  axios.get("http://localhost:3000/diets").then((response) => {
    if (response.statusText == "OK") {
      eHandler.value = false;
      data.value = response.data;
    }
  });
};
getDietsData();
</script>

<template>
  <div class="errorHandler" v-if="eHandler">
    <ErrorHandler></ErrorHandler>
  </div>
  <div class="dietView" v-else>
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
.errorHandler {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 60px;
}
</style>
