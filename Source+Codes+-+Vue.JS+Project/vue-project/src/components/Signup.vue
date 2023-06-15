<template>
  <h1>Sign UP</h1>

  <div class="register">
    <input
      type="text"
      class="form-control"
      placeholder="username"
      required
      v-model="name"
    />
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      required
      v-model="password"
    />
    <input
      type="email"
      class="form-control"
      placeholder="Email"
      required
      v-model="email"
    />
    <div class="form-group">
      <a class="" href="#">
        <button
          class="btn g-button justify-content-center"
          type="submit"
          v-on:click="signUp"
        >
          Sign up
        </button>
      </a>
      <br />
      <br />

      <RouterLink to="/login"
        ><button class="btn g-button" type="submit">Login</button></RouterLink
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "sign-com",
  data() {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async signUp() {
      console.log("submitted", this.name, this.email, this.password);
      let info = await axios.post("http://localhost:3000/username", {
        name: this.name,
        password: this.password,
        email: this.email,
      });
      console.warn(info);
      if (info.status == 201) {
        alert("ok");
      }
      localStorage.setItem("user-info", JSON.stringify(info.data));
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    let firstuser = localStorage.getItem("user-info");
    if (firstuser) {
      this.$router.push({ name: "Home" });
    }
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
