<script setup>
import { RouterLink } from "vue-router";
import NavbarItem from "@/components/menu/NavbarItem.vue";
import { ref } from "vue";

const cartIcon = "src/images/cart-svgrepo-com.svg";
const userIcon = "src/images/user-svgrepo-com.svg";
const menuIcon = "src/images/menu-svgrepo-com.svg";
const isActive = ref(false);

const showMenu = () => {
  if (window.innerWidth < 768) {
    isActive.value = !isActive.value;
  } else {
    isActive.value = false;
  }
};
</script>
<template>
  <div class="navbar">
    <img class="logo" src="@/images/logo.svg" alt="" />
    <div class="top-bar" :class="{ active: isActive }">
      <div class="wrapper">
        <button @click="showMenu" class="closeBtn">X</button>
      </div>
      <RouterLink to="/" class="nav-link" @click="showMenu">Home</RouterLink>
      <RouterLink to="/diet" class="nav-link" @click="showMenu"
        >Diety</RouterLink
      >
      <RouterLink to="/catering" class="nav-link" @click="showMenu"
        >Catering</RouterLink
      >
      <RouterLink to="/about-us" class="nav-link" @click="showMenu"
        >O nas</RouterLink
      >
      <RouterLink to="/faq" class="nav-link" @click="showMenu">FAQ</RouterLink>
      <RouterLink to="/contact" class="nav-link" @click="showMenu"
        >Kontakt</RouterLink
      >
    </div>
    <div class="items">
      <RouterLink to="/cart" class="nav-link"
        ><NavbarItem :iconSrc="cartIcon" :counter="true"></NavbarItem
      ></RouterLink>
      <RouterLink to="/login" class="nav-link">
        <NavbarItem :iconSrc="userIcon"></NavbarItem>
      </RouterLink>
      <button @click="showMenu" class="menuBtn">
        <img :src="menuIcon" alt="" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.navbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0 60px -24px rgba(66, 68, 90, 1);
  .logo {
    display: block;
    width: 160px;
    flex-grow: 0.2;
  }

  .top-bar {
    display: none;
  }
  .items {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 15px;
  }
  .menuBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #d8d8d8;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: #a1a1a1;
    }
    img {
      width: 20px;
    }
  }
}

@import "@/components/menu/_mediaNavbar.scss";
</style>
