<script setup>
import { RouterLink } from "vue-router";
import NavbarItem from "@/components/menu/NavbarItem.vue";

const cartIcon = "src/images/cart-svgrepo-com.svg"
const userIcon = "src/images/user-svgrepo-com.svg"
</script>
<template>
  <header>
    <img class="logo" src="@/images/logo.svg" alt="" />
    <div class="top-bar">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/diet" class="nav-link">Diety</RouterLink>
      <RouterLink to="/catering" class="nav-link">Catering</RouterLink>
      <RouterLink to="/about-us" class="nav-link">O nas</RouterLink>
      <RouterLink to="/faq" class="nav-link">FAQ</RouterLink>
      <RouterLink to="/contact" class="nav-link">Kontakt</RouterLink>
    </div>
    <div class="items">
      <RouterLink to="/cart" class="nav-link"
        ><NavbarItem :iconSrc=cartIcon :counter=true ></NavbarItem
      ></RouterLink>
      <NavbarItem :iconSrc=userIcon></NavbarItem>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0 60px -24px rgba(66, 68, 90, 1);
  .logo {
    width: 200px;
    margin-left: 25px;
    flex-grow: 0.2;
  }

  .top-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 20px;
    flex-grow: 4;
    .nav-link {
      color: gray;
      text-decoration: none;
      padding: 5px 10px;
      margin: 0 10px;

      &:hover, &.active-route {
        background-color: #26ad60;
        color: white;
        border-radius: 5px;
        transition-duration: 1ms;
        cursor: pointer;
      }
    }
  }
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-grow: 0.2;
    gap: 15px;
  }
}
</style>
