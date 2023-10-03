<script setup>

import { useCounterStore } from "@/stores/counter";
const addToCard = useCounterStore()

defineProps({
  id: {
    type: Number,
    default: () => "",
  },
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
  imgAlt: {
    type: String,
    default: () => "",
  },
});



</script>

<template>
  <div class="card">
    <span class="title">{{ title }}</span>
    <img class="card-img" :src="imgSrc" :alt="imgAlt" />
    <span class="description">{{ description }}</span>
    <span class="mealsCount">Ilość posiłków: {{ mealsCount }}</span>
    <div>
      Cena: <span class="price"> {{ price }} {{ currency }} / dzień </span>
    </div>
    <button @click="() => addToCard.increment(id)" class="btn-add">Dodaj do koszyka</button>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 270px;
  border-radius: 8px;
  box-shadow: 2px 4px 10px 1px #01111170;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }

  .card-img {
    margin-bottom: 20px;
  }

  .title {
    margin-bottom: 15px;
    font-size: 22px;
    font-weight: bold;
  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    padding: 10px;
  }

  .mealsCount {
    margin-bottom: 5px;
  }

  .price {
    font-weight: bold;
  }

  .btn-add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 45px;
    margin-top: 15px;
    padding: 12px;
    background-color: #26ad60;
    box-shadow: 2px 4px 6px 1px #01111170;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 8px;
    border: none;
    transition: 0.3 easy color, 0.3 easy background-color;

    &:hover {
      cursor: pointer;
      background-color: #1d8048;
    }
  }
}
</style>
