<script setup>
import { ref } from "vue";
import axios from "axios";
import FAQ from "@/components/content/faqpage/FAQ.vue";
import ErrorHandler from "@/components/content/errorHandler/ErrorHandler.vue";

const data = ref([]);
const eHandler = ref(true);

const getFAQData = async () => {
  try {
    await axios.get("http://localhost:3000/faq").then((response) => {
      if (response.statusText == "OK") {
        eHandler.value = false;
        data.value = response.data;
      }
    });
  } catch {
    return;
  }
};
await getFAQData();
</script>

<template>
  <div class="errorHandler" v-if="eHandler">
    <ErrorHandler></ErrorHandler>
  </div>
  <div class="FAQView" v-else>
    <img src="@/images/logo.svg" alt="" class="logo" />
    <div class="FAQ">
      <FAQ
        v-for="item in data"
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

.FAQView {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.logo {
  margin-top: 5px;
  height: 100px;
  width: 100%;
  padding: 20px;
}

@import "@/views/FAQView/_mediaAboutFAQ.scss";
</style>
