<script>
import axios from 'axios'
import { RouterLink} from "vue-router";
export default {
  name: "Login",
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods:{
    async login() {
        let result = await axios.get(
          `http://localhost:3000/users?name=${this.name}&password=${this.password}`
          )
          if(result.status==200 && result.data.length>0){
            localStorage.setItem("userInformation",JSON.stringify(result.data))
            console.log(JSON.stringify(result.data))
            alert("Witaj " + (result.data[0].firstName + "!\nZostaniesz przeniesiony na strone główną."))
            this.$router.push('/')
        }
        else{
          alert("Niepoprawny login lub hasło.")
        }
      }
  }
};
</script>
<template>
  <div class="mainForm">
    <div class="form">
      <form>
        <label for="login">Login</label>
        <input type="text" v-model="name" class="login" placeholder="Użytkownik">
        <label for="password">Hasło</label>
        <input type="password" v-model="password" class="password" placeholder="*****">
      </form>
      <div class="buttons">
        <button v-on:click="login" class="log-in">Zaloguj</button>
        <div class="register">
          <RouterLink to="/register" class="link">Nie masz konta? Zarejstruj się!</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainForm {
  margin: auto;
  display: flex;
  justify-content: center;
  width: 500px;
  height: 450px;
  margin-top: 4rem;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 2px 4px 10px 1px #01111170;
}

.form {
  width: 400px;
  height: 450px;
  margin: auto;
  padding: 20px;
}

.login,
.password,
.email {
  width: 350px;
  height: 50px;
  border: 1px groove black;
  border-radius: 15px;
  padding: 10px;
  transition: 300ms;
  font-size: large;
  outline: none;

  &:focus {
    border-radius: 0px;
    transition: 300ms;
    border: 1px solid #26ad60;
  }
}

label {
  display: flex;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 20px;
}

.log-in {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 150px;
  height: 45px;
  margin-top: 35px;
  padding: 12px;
  background-color: #26ad60;
  box-shadow: 2px 4px 6px 1px #01111170;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 8px;
  border: none;
  transition: 0.3 easy color, 0.3 easy background-color;

  &:hover {
    cursor: pointer;
    background-color: #1d8048;
  }
}

.register {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 200px;
  height: 45px;
  margin-top: 15px;
  padding: 12px;
  background-color: #26ad60;
  box-shadow: 2px 4px 6px 1px #01111170;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 8px;
  border: none;
  transition: 0.3 easy color, 0.3 easy background-color;

  &:hover {
    cursor: pointer;
    background-color: #1d8048;
  }
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  align-items: center;
}

.link {
  color: white;
  text-decoration: none;
}
</style>