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
  Tu bym logo dal na srodek jak juz bedzie
    <div class="errorHandler" v-if="eHandler">
        <ErrorHandler></ErrorHandler>
    </div>
    <div class="FAQView" v-else>
      <div class="FAQ">
        <FAQ
        v-for="(item) in data"
        :id="item.id"
        :question="item.question"
        :answer="item.answer"
        ></FAQ>
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
