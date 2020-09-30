<template>
  <div class="wrap-auth">
    <form class="card-login">
      <h3 class="textLogo">Gabuter Social</h3>
      <div class="input-form">
        <div class="logo-icon">
          <i class="fas fa-at"></i>
        </div>
        <input type="email" placeholder="Enter your email">
      </div>
      <div class="input-form">
        <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap-auth{
  background: #ffd57e;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.textLogo{
  font-family: 'Righteous', cursive;
  font-size: 35px;
  color: #ac4b1c;
}
.card-login{
  width: 25%;
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
}
.input-form{
  display: flex;
  width: 80%;
  height: 40px;
  background-color: #fff;
  margin-top: 15px;
}
.input-form button{
  border: none;
  outline: none;
  background-color: #ac4b1c;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  width: 100%;
}
.logo-icon{
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3cdc2;
}
.logo-icon i{
  color:#ac4b1c;
  font-size: 20px;
}
.input-form input{
  width: 100%;
  border: none;
  outline: none;
  padding: 0 10px 0 20px;
  font-family: 'Poppins', sans-serif;
}
</style>
