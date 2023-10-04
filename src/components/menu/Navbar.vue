<script setup>
import { RouterLink } from "vue-router";
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();


</script>
<template>
  <header>
    <img class="logo" src="../../images/logo50x50.png" alt="" />
    <div class="wrapper top-bar">
      <nav>  
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/diet" class="nav-link">Diety</RouterLink>
        <RouterLink to="/catering" class="nav-link">Catering</RouterLink>
        <RouterLink to="/about-us" class="nav-link">O nas</RouterLink>
        <RouterLink to="/faq" class="nav-link">FAQ</RouterLink>
        <RouterLink to="/contact" class="nav-link">Kontakt</RouterLink>
      </nav>
    </div>
    <RouterLink to="/cart" class="nav-link">Ilość zamówionych diet: {{counter.count}}</RouterLink>
  </header>
</template>
<style scoped lang="scss">
header {
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 60px -24px rgba(66, 68, 90, 1);
}

.top-bar {
  display: inherit;
  justify-content: center;
  width: 100%;
  margin-top: 3px;
  font-size: 20px;
  padding: 10px;
}

.nav-link {
  color: gray;
  text-decoration: none;
  padding: 10px;
  margin: 0 10px;
}

.nav-link:hover {
  background-color: #26ad60;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  transition-duration: 1ms;
}
.logo{
  float:left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position:absolute;
  margin-left: 25px;
}
</style>
