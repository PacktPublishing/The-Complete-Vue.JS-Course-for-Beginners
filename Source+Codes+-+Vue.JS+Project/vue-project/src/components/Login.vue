<template>
  <h1>Login</h1>

  <div class="register">
    <input
      type="text"
      class="form-control"
      placeholder="username"
      v-model="username"
    />
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      v-model="password"
    />

    <div class="form-group">
      <a class="" href="#">
        <button class="btn g-button" type="submit" v-on:click="login">
          Login
        </button>
      </a>
    </div>
    <br />
    <RouterLink to="/signup"
      ><button class="btn g-button" type="submit">Signup</button></RouterLink
    >
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login-com",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let info = await axios.get(
        "http://localhost:3000/username?usernname=carlos&password=554445"
      );
      if (info.status == 200 && info.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(info.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
<style scoped>
.g-button {
  width: 300px;
  height: 40px;
  margin-left: 42%;

  background-color: rgb(168, 121, 67);

  outline: none;
  color: black;
}

.g-button:hover {
  width: 300px;
  height: 40px;
  margin-left: 42%;
  background-color: rgb(227, 138, 36);
  color: black;
  outline: none;
}
h1 {
  text-align: center;
  font-weight: bold;
  margin-top: 200px;
  margin-bottom: 100px;
  color: rgb(168, 121, 67);
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
}
</style>
