<script setup></script>

<template>
  <div class="loading ">
    <div class="circle-out rotateAnimation">
      <div class="circle-in"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  .circle-out {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: conic-gradient(#d8d8d8 50%, #fff);
    .circle-in {
      width: 75px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}

.rotateAnimation {
  animation: rotateCircle 1.8s ease-in-out infinite both;
}

@keyframes rotateCircle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
