<script setup>
function register(){
 
 ValidateEmail();
     const password = document.querySelector('.password');
     const password2 = document.querySelector('.password2');

     if(password.value !== password2.value){
         alert("Hasła są różne!")
     }
     else{
         alert("Konto zostało założone pomyślnie, możesz sie zalogować")
     }
}

function ValidateEmail() {
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 if (inputEmail.value.match(mailformat)) {
   return true;
 } else {
   return false;
 }
}
</script>

<template>
    <div class="mainRegister">
        <div class="register">
            <form>
                <label for="login">Login</label>
                <input type="text" class="login" placeholder="Użytkownik">
                <label for="email">Email</label>
                <input type="text" class="email" id="inputEmail" placeholder="email@wp.pl" @input="(event) => (inputEmail = event.target.value)">
                <label for="password">Hasło</label>
                <input type="password" class="password" placeholder="*****">
                <label for="password2">Powtorz hasło</label>
                <input type="password" class="password2" placeholder="*****">
            </form>
            <button class="registerBtn" onclick="register()">Załóż konto</button>
        </div>
    </div>
</template>

<style scoped lang="scss"> 
.mainRegister{
    margin: auto;
    display: flex;
    justify-content: center;
    width: 500px;
    height: 600px;
    margin-top: 4rem;
    background-color: black;
    padding: 10px;
    border: 1px groove white;
    box-shadow: 1px 5px 10px 15px black;
}
 
.register{
    background-color: grey;
    width: 400px;
    height: 500px;
    margin: auto;
    padding: 20px;
}
 
.login, .email, .password, .password2{
    width: 350px;
    height: 50px;
    border: 1px groove black;
    border-radius: 15px;
    padding: 10px;
    transition: 600ms;
    font-size:large;
    outline: none;
    &:focus{
        border-radius: 0;
        transition: 500ms;
        border: 3px solid greenyellow;
    }
}
 
label{
    display: flex;
    margin-bottom: 5px;
    margin-top: 10px;
    margin-left: 5px;
    font-size: 20px;
}
 
.registerBtn{
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    width: 40%;
    background-color: green;
    font-size: large;
    border: 2px groove black;
    border-radius: 10px;
}
</style>