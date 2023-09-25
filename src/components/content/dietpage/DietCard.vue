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
    <img class="card-img" src="../../../images/card-image150x150.png" alt="" />
    <span class="title">{{ title }}</span>
    <span class="description">{{ description }}</span>
    <span class="mealsCount">{{ mealsCount }}</span>
    <span class="price">{{ price }} {{ currency }}</span>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 2px 4px 10px 1px #01111170;
  overflow: hidden;
  transition: all .3s ease-in-out;

  &:hover{
    transform: scale(1.15);
  }

  .card-img {
    margin-bottom: 20px;
  }

  .title {
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
