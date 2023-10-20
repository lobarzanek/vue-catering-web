<script setup>
import Contact from '@/components/content/contact/contact.vue';
import {ref} from "vue";
import ErrorHandler from "@/components/content/errorHandler/ErrorHandler.vue";
import axios from "axios";
import Contactus from '@/components/content/contact/Contactus.vue';

const data = ref([]);
const eHandler = ref(true);

const getContactData = () => {
  axios.get("http://localhost:3000/contactus").then((response) => {
    if (response.statusText == "OK") {
      eHandler.value = false;
      data.value = response.data;
    }
  });
};
getContactData();
</script>

<template>
    <div class="errorHandler" v-if="eHandler">
        <ErrorHandler></ErrorHandler>
      </div>
      <div v-else class="middleView">
        <div class="contactView">
        </div>
            <Contact></Contact>
            
          <div class="contactus">
              <contactus
              v-for="item in data"
              :id="item.id"
              :titleUs="item.titleUs"
              :subTitleUs="item.subTitleUs"
              :phoneNumberUs="item.phoneNumberUs"
              :emailUs="item.emailUs"
              ></contactus>
            </div> 
          </div>
</template>

<style scoped>
@import '@/views/ContactView/mediaAboutContact.scss';
.errorHandler {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 60px;
}
.middleView{
  display: flexbox-inline;
}

.contactus{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-direction: column;
    margin: auto;
    margin-top: 1rem;
}

</style>