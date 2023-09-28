<script setup>
import { ref } from "vue";
import axios from "axios";
import FAQ from "../components/content/faqpage/FAQ.vue";
import ErrorHandler from "@/components/content/errorHandler/ErrorHandler.vue";

const data = ref([]);
const eHandler = ref(true);

const getFAQData = () => {
  axios.get("http://localhost:3000/faq").then((response) => {
    if (response.statusText == "OK") {
      eHandler.value = false;
      data.value = response.data;
    }
  });
};
getFAQData();

</script>

<template>
    <div class="errorHandler" v-if="eHandler">
        <ErrorHandler></ErrorHandler>
    </div>
    <div class="FAQView" v-else>
      <h1>Frequently Asked Questions:</h1>
      <div class="FAQ">
        <!-- <FAQ
        v-for"(item, index) in data"
        :id="item.id"
        ></FAQ> -->
      </div>
  </div>
</template>

<style scoped lang="scss">
.errorHandler {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 60px;
  }
</style>
