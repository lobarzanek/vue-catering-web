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
  <div class="FAQView" v-else>
    <img src="../images/logo.svg" alt="" class="logo" />
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
}
</style>