<script setup>
defineProps({
  title: {
    type: String,
    default: () => "",
  },
  description: {
    type: String,
    default: () => "",
  },
  mealsCount: {
    type: Number,
    default: () => "",
  },
  price: {
    type: Number,
    default: () => "",
  },
  currency: {
    type: String,
    default: () => "",
  },
  imgSrc: {
    type: String,
    default: () => "",
  },
});
</script>

<template>
  <div class="card">
    <div class="card-content front-card">
      <span class="title">{{ title }}</span>
    </div>
    <div class="card-content back-card">
      <span class="description">{{ description }}</span>
      <span class="mealsCount">{{ mealsCount }}</span>
      <span class="price">{{ price }}</span>
      <span class="currency">{{ currency }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;1,700&display=swap");
.card {
  font-family: "Nunito", sans-serif;
  width: 250px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 2px 4px 10px 1px #01111170;
  overflow: hidden;
  
}
</style>
