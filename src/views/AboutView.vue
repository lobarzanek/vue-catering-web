<script setup>
import { ref } from "vue";
import axios from "axios";
import AboutCard from "../components/content/aboutpage/aboutCard.vue";

const data = ref([]);

const getAboutUsData = () => {
  axios.get("http://localhost:3000/aboutus").then((response) => {
    console.log(response.data);

    data.value = response.data;
  });
};
getAboutUsData();
</script>

<template>
  <div class="aboutview">
    <h1>o nas</h1>
    <div class="card-container">
      <AboutCard
        v-for="(item, index) in data"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :imgSrc="item.imgSrc"
        :imgAlt="item.imgAlt"
        :bgcImgSrc="item.bgcImgSrc"
        :bgcImgAlt="item.bgcImgAlt"
        :key="index"
      ></AboutCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aboutview {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  h1 {
    text-transform: uppercase;
  }

  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 80px;
    margin-bottom: 40px;
  }
}
</style>
