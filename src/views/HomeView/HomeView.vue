<script setup>
import { ref } from "vue";
import axios from "axios";
import Home from "@/components/content/homepage/Home.vue";
import ErrorHandler from "@/components/content/errorHandler/ErrorHandler.vue";

const data = ref([]);
const eHandler = ref(true);

const getHomeData = () => {
  axios.get("http://localhost:3000/home").then((response) => {
    if (response.statusText == "OK") {
      eHandler.value = false;
      data.value = response.data;
    }
  });
};
getHomeData();
</script>
<template>
  <div class="errorHandler" v-if="eHandler">
    <ErrorHandler></ErrorHandler>
  </div>
  <div class="HomeView" v-else>
    <img src="@/images/logo.svg" alt="" class="logo" />
    <div class="dinnerView">
      <Home
        v-for="(item, index) in data"
        :id="item.id"
        :title="item.title"
        :img="item.img"
        :opinion="item.opinion"
        :comment="item.comment"
        :key="index"
      ></Home>
    </div>
    <RouterLink to="/diet" class="button">Zamów nasze diety!</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.errorHandler {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 60px;
}
.logo {
  width: 100%;
  height: 100px;
  padding: 12px;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 250px;
  height: 70px;
  margin-top: 15px;
  margin-bottom: 30px;
  padding: 12px;
  background-color: #26ad60;
  box-shadow: 2px 4px 6px 1px #01111170;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 8px;
  border: none;
  transition: 0.3 easy color, 0.3 easy background-color;

  &:hover {
    cursor: pointer;
    background-color: #1d8048;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:link {
    color: black;
    text-decoration: none;
  }
}
.HomeView {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  h1 {
    font-size: 26px;
    margin-bottom: 20px;
  }
}
.dinnerView {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 32px;
}

@import '@/views/HomeView/mediaAboutHome.scss';
</style>
