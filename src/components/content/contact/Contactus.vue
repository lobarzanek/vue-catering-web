<script setup>
defineProps({
  id: {
    type: Number,
    default: () => "",
  },
  titleUs: {
    type: String,
    default: () =>"",
  },
  subTitleUs:{
    type: String,
    default: () =>"",
  },
  phoneNumberUs: {
    type: Number,
    default: () => "",
  },
  emailUs: {
    type: String,
    default: () => "",
  },
});
</script>

<template>
    <div class="aboutus">
            <h2> {{ titleUs }} </h2>
            <h3> {{ subTitleUs }} </h3>
            <p>  {{ emailUs }}  </p>
            <p>  {{ phoneNumberUs }} </p>
        </div>

</template>

<style scoped lang="scss">
.aboutus{
    justify-content: center;
    text-align: center;
    padding: 1rem;
    display: flexbox;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 1px 1px 1px 1px #26ad60;
}
</style>