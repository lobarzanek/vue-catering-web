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

// const faqs = document.querySelectorAll(".faq");

// faqs.forEach((faq) => {
//     faq.addEventListener("click", () => {
//         faq.classList.toggle("active");
//     });
// });


const toggle = ref(false)
const toggleClass = () =>{
  console.log("click");
  toggle.value = !toggle.value
}
</script>

<template>
  <div class="faq" :class="{active: toggle}" @click="toggleClass()">
    <div class="question">
      <h3>{{ question }}</h3>
      <svg @click="{}" width="15" height="10" viewBox="0 0 42 25">
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
    max-width: 700px;
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid white;
    cursor: pointer;
}

.question{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.question h3{
    font-size: 1.8rem;
}

.answer{
    max-height: 0;
    overflow: hidden;
    transition: max-height 1.4s ease;
}

.answer p{
    padding-top: 1rem;
    line-height: 1.6;
    font-size: 1.4rem;
}

.faq.active .answer{
    max-height: 300px;
    animation: fade 1s ease-in-out;
}

.faq.active svg{
    transform: rotate(180deg);
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
</style>
