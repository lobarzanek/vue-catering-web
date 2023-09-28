<script setup></script>

<template>
  <div class="errorHandler">
    <div class="title">
      <span>Coś poszło nie tak..</span>
      <svg viewBox="-8 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm144 386.4V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v151.4C315.5 447 282.8 456 248 456s-67.5-9-96-24.6V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v114.4c-34.6-36-56-84.7-56-138.4 0-110.3 89.7-200 200-200s200 89.7 200 200c0 53.7-21.4 102.5-56 138.4zM205.8 234.5c4.4-2.4 6.9-7.4 6.1-12.4-4-25.2-34.2-42.1-59.8-42.1s-55.9 16.9-59.8 42.1c-.8 5 1.7 10 6.1 12.4 4.4 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.3 7.9 4.8 13.7 1.6zM344 180c-25.7 0-55.9 16.9-59.8 42.1-.8 5 1.7 10 6.1 12.4 4.5 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.2 8 4.7 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-3.9-25.2-34.1-42.1-59.8-42.1zm-96 92c-30.9 0-56 28.7-56 64s25.1 64 56 64 56-28.7 56-64-25.1-64-56-64z"
        />
      </svg>
    </div>
    <span class="msg"
      >Wygląda na to, że nasz serwer nie odpowiada. Bardzo przepraszamy za
      zaistniałą sytuację! Nasz zespół już pracuje nad naprawieniem błędu. Jeśli
      masz jakieś pytania odnośnie naszej oferty zachęcamy do kontaktu
      e-mailowego lub telefonicznego.</span
    >
    <span>E-mail: kontakt@domena.com</span>
    <span>tel.: +12 345 678 900</span>
  </div>
</template>

<style scoped lang="scss">
.errorHandler {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 2px 4px 10px 1px #01111170;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    gap: 60px;
    font-weight: bold;
    font-size: 36px;

    svg {
      width: 60px;
      height: 60px;
    }
  }
  .msg {
    margin: 30px;
    font-size: 20px;
  }
}
</style>
