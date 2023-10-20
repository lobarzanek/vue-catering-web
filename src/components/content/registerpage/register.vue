<script>
import axios from 'axios'
export default{
    name: 'SignUp',
    Data() {
    return{
        firstName:'',
        name:'',
        email:'',
        password:'',
        password2:''
    }
},
methods:{
    async signUp() {
        if (
      !this.firstName ||
      !this.name ||
      !this.email ||
      !this.password ||
      !this.password2
    ) {
      alert("Wszystkie pola muszą być wypełnione.");
      return;
    }
        let result = await axios.post("http://localhost:3000/users",{
            firstName:this.firstName,
            name:this.name,
            email:this.email,
            password:this.password,
            password2:this.password2
        });
        if(result.status==201){
            alert("Konto zostało założone");
            localStorage.setItem("userInformation",JSON.stringify(result.data))
            this.$router.push('/login')
        }
    }
}
}
// function register(){


//      const password = document.querySelector('.password');
//      const password2 = document.querySelector('.password2');

//      if(password.value !== password2.value ||  !ValidateEmail()){
//          alert("Niepoprawne dane.")
//      }
//      else{
//          alert("Konto zostało założone pomyślnie, możesz sie zalogować")
//      }
// }

// function ValidateEmail() {
//  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//  if (inputEmail.value.match(mailformat)) {
//    return true;
//  } else {
//    return false;
//  }
// }
</script>

<template>
    <div class="mainRegister">
        <div class="register">
            <form>
                <label for="fistName">Imię</label>
                <input type="text" v-model="firstName" class="firstName" placeholder="Imię">
                <label for="login">Login</label>
                <input type="text" v-model="name" class="login" placeholder="Użytkownik">
                <label for="email">Email</label>
                <input type="text" v-model="email" class="email" id="inputEmail" placeholder="email@wp.pl">
                <label for="password">Hasło</label>
                <input type="password" v-model="password" class="password" placeholder="*****">
                <label for="password2">Powtorz hasło</label>
                <input type="password" v-model="password2" class="password2" placeholder="*****">
            </form>
            <div class="registerBtnDiv">
                <button v-on:click="signUp" class="registerBtn">Załóż konto</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"> 
.mainRegister{
    margin: auto;
    display: flex;
    justify-content: center;
    width: 315px;
    height: 550px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 4px;
    border: 1px groove white;
    border-radius: 5%;
    box-shadow: 2px 4px 10px 1px #01111170;
}
 
.register{
    width: 300px;
    height: 500px;
    margin: auto;
    padding: 20px;
    margin-top: -10px;
}
 
.firstName, .login, .email, .password, .password2{
    width: 260px;
    height: 45px;
    border: 1px groove black;
    border-radius: 15px;
    padding: 10px;
    transition: 300ms;
    font-size:large;
    outline: none;
    &:focus{
        border-radius: 0;
        transition: 500ms;
        border: 1px solid #26ad60;
    }
}
 
label{
    display: flex;
    margin-bottom: 5px;
    margin-top: 10px;
    margin-left: 5px;
    font-size: 15px;
}
 
.registerBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    width: 150px;
    height: 35px;
    margin-top: 25px;
    padding: 12px;
    background-color: #26ad60;
    box-shadow: 2px 4px 6px 1px #01111170;
    color: #fff;
    font-size: 12px;
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

  .registerBtnDiv{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @import '@/components/content/registerpage/mediaAboutRegister.scss';

</style>