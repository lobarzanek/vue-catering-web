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
  margin:auto;
  margin-top: 1rem;
}
.button {
  width: 700px;
  height: 100px;
  justify-content: center;
  margin: auto;
  display: flex;
  border: 1px groove black;
  border-radius: 20px;
  background-color: #26ad60;
  transition: 500ms;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 63px;
  &:hover{
    background-color: #435334;
    transition: 500ms;
  }
  &:visited{
    color:black;
    text-decoration: none;
  }
  &:link{
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
  h1{
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
</style>