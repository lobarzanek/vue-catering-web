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
    padding: 12px;
    display: flexbox;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 1px 1px 1px 1px #26ad60;
}
h2{
  font-size: 18px;
}
h3{
  font-size: 16px
}
p{
  font-size: 14px;
}

@import '@/components/content/contact/mediaAboutContactus.scss';
</style>