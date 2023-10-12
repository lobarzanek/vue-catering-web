<script setup>
import { ref } from "vue";
import axios from "axios";
import AboutCard from "@/components/content/aboutpage/aboutCard.vue";
import ErrorHandler from "@/components/content/errorHandler/ErrorHandler.vue";

const data = ref([]);
const eHandler = ref(true);

async function getAboutUsData() {
  axios.get("http://localhost:3000/aboutus").then((response) => {
    if (response.statusText == "OK") {
      eHandler.value = false;
      data.value = response.data;
    }
  });
}
getAboutUsData();
</script>

<template>
  <div class="errorHandler" v-if="eHandler">
    <ErrorHandler></ErrorHandler>
  </div>
  <div class="aboutview" v-else>
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
.errorHandler {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 60px;
}
</style>
