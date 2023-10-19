<script setup>

defineProps({
  id: {
    type: Number,
    default: () => "",
  },
  title: {
    type: String,
    default: () => "",
  },
  img: {
    type: String,
    default: () => "",
  },
  opinion: {
    type: Number,
    default: () => "",
  },
  comment: {
    type: String,
    default: () => "",
  }
})
</script>

<template>
  <div class="dinner">
    <h1>{{ title }}</h1>
    <img class="card" :src="img" />
    <h3>Ocena klientów {{ opinion }}/5 </h3>
    <h5>{{ comment }}</h5>
  </div>
    <!-- <RouterLink to="/diet" class="button">ss</RouterLink> -->
</template>

<style scoped lang="scss">
.dinner{
justify-content: center;
flex-direction: column;
display: flex;
align-items: center;
text-align: center;
padding: 10px;
width: 280px;
overflow: hidden;
}
.card{
opacity: 50%;
transition: 1s;
width: 255px;
height: 270px;
border: 1px groove black;
border-radius: 10%;

&:hover{
  opacity: 100%;
  transition: 500ms;
}
}

@import "@/components/content/homepage/mediaAboutHome.scss";

</style>