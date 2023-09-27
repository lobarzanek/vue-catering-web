<script setup>
defineProps({
  id: {
    type: Number,
    default: () => "",
  },
  name: {
    type: String,
    default: () => "",
  },
  description: {
    type: String,
    default: () => "",
  },
  imgSrc: {
    type: String,
    default: () => "",
  },
  imgAlt: {
    type: String,
    default: () => "",
  },
  bgcImgSrc: {
    type: String,
    default: () => "",
  },
  bgcImgAlt: {
    type: String,
    default: () => "",
  },
});
</script>
<template>
  <div class="about-card">
    <img class="hero-img" :src="bgcImgSrc" :alt="bgcImgAlt" />
    <div class="hero-cover"></div>
    <div class="white-line"></div>
    <img class="profile-img" :src="imgSrc" :alt="imgAlt" />
    <div class="data-box">
      <span class="name">{{ name }}</span>
      <span class="description">{{ description }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-card {
  position: relative;
  display: flex;
  justify-content: center;
  width: 350px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 2px 4px 10px 1px #01111170;
  overflow: hidden;
  .hero-img {
    width: 100%;
    object-fit: cover;
  }
  .hero-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0000009f;
  }

  .white-line {
    position: absolute;
    top: 30%;
    width: 100%;
    height: 6px;
    background-color: #fff;
  }

  .profile-img {
    position: absolute;
    top: 30%;
    width: 180px;
    height: 180px;
    translate: 0 -50%;
    border-radius: 50%;
    border: 8px solid #fff;
    object-fit: cover;
  }

  .data-box {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    color: #fff;
    .name {
      font-weight: bold;
      font-size: 36px;
    }
    .description {
      text-align: center;
    }
  }
}
</style>
