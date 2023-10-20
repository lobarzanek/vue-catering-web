<script setup>
import { ref } from "vue";

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

const toggle = ref(false)
const toggleClass = () =>{
  toggle.value = !toggle.value
}
</script>

<template>
  <div class="faq" :class="{active: toggle}" @click="toggleClass()">
    <div class="question">
      <h3>{{ question }}</h3>
      <svg @click="{}" width="40" height="20" viewBox="0 0 42 25">
        <path
          d="M3 3L21 21L39 3"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="answer">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.faq{
    display: flexbox;
    width: 100%;
    border-bottom: 2px solid black;
    cursor: pointer;
    box-shadow: 2px 4px 10px 1px #01111170;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    &:first-child{
      margin-top: 2%;
      border-top: 2px solid black;
    }
    &.active{
      svg{
        transform: rotate(180deg);
    }
    .answer{
      max-height: 300px;
      animation: fade 0.5s ease-in-out;
    }
    }
}


.question{
    display: flex;
    align-items: center;
    padding: 5px;
    h3{
      font-size: 1.4rem;
    }
}

.answer{
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease;
    padding: 5px;
    p{
      line-height: 1.7;
      font-size: 1.4rem;
    }
}

svg{
    transition: transform 0.5s ease-in;
}

@keyframes fade{
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
}

@import '@/components/content/faqpage/mediaAboutFAQ.scss';

</style>
