<script setup>
import { ref } from "vue";

const inputName = ref();
const inputEmail = ref("");
const inputPhone = ref("");

function SendMessage() {
  if (!ValidateEmail() || !ValidatePhoneNumber() || !ValidateName()) {
    alert("Niepoprawne dane");
    return;
  }
  alert("Wiadomość wysłana");
}

function ValidateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputEmail.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

function ValidatePhoneNumber() {
  var phoneformat =
    /^([+][[0-9]{2})?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

  if (inputPhone.value.match(phoneformat)) {
    return true;
  } else {
    return false;
  }
}

function ValidateName() {
  if (inputName.value.length >= 2) {
    return true;
  } else {
    return false;
  }
}
</script>

<template>
  <div class="contact">
    <div class="reciver">
      <span>Wybierz adresata</span>
      <select class="section">
        <option value="diets">Diety</option>
        <option value="catering">Catering</option>
      </select>
      <div class="name">
        <span>Imię</span>
        <input
          type="text"
          id="inputName"
          placeholder="Andrzej"
          :value="inputName"
          @input="(event) => (inputName = event.target.value)"
        />
        <div class="email">
          <span>Email</span>
          <input
            type="text"
            id="inputEmail"
            placeholder="example@gmail.com"
            :value="inputEmail"
            @input="(event) => (inputEmail = event.target.value)"
          />
          <div class="phone">
            <span>Numer telefonu</span>
            <input
              type="text"
              id="inputPhone"
              placeholder="+48-123-123-123"
              :value="inputPhone"
              @input="(event) => (inputPhone = event.target.value)"
            />
            <div class="message">
              <span>Twoja wiadomość</span>
              <textarea placeholder="Twoje uwagi"></textarea>
            </div>
          </div>
        </div>
      </div>
      <button @click="SendMessage()" class="send">Wyślij wiadomość</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  display: flexbox;
  width: 50%;
}

textarea,input,.send,.section {
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 10px 1px black;
}

span {
  letter-spacing: normal;
  text-transform: uppercase;
  font-size: 13px;
  line-break: normal;
  &::after, &::before{
    content: "\a";
    white-space: pre;
  }
}


input, .section {
  width: 80%;
  height: 50px;
  border: 1px groove black;
  border-radius: 15px;
  padding: 5px;
  box-shadow: 1px 1px 10px 1px black;
}

textarea {
  width: 80%;
  height: 150px;
  resize: none;
  padding: 5px;
}
.send {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 150px;
  height: 20px;
  margin-top: 15px;
  padding: 12px;
  background-color: #26ad60;
  box-shadow: 2px 4px 6px 1px #01111170;
  color: #fff;
  font-size: 10px;
  text-transform: uppercase;
  border-radius: 8px;
  border: none;
  transition: 0.3 easy color, 0.3 easy background-color;
  
  &:hover {
    cursor: pointer;
    background-color: #1d8048;
  }
  &:visited{
    color:black;
    text-decoration: none;
  }
  &:link{
    color: black;
    text-decoration: none;
  }
}
</style>
