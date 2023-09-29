<script setup>

import {useCounterStore} from "@/stores/counter"

defineProps({
    id: {
        type: Number,
        default: () => "",
    },
    question: {
        type: String,
        default: () => "",
    },
    answer: {
        type: String,
        default: () => "",
    },
});


</script>

<template>
    <div class="qa">
      <span class="question">{{ question }}</span>
      <span class="answer">{{ answer }}</span>
    </div>
  </template>

  <style scoped lang="scss">
  .qa {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 850px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 2px 4px 10px 1px #01111170;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

</style>