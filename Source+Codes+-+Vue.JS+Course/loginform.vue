<template>
  <h1>Simple Form</h1>
  <label for="">Username</label>&nbsp;
  <input
    type="text"
    ref="input"
    placeholder="username"
    v-model="form.username"
  />
  <br />
  <br />
  <label for="">Password</label>&nbsp;&nbsp;
  <input type="password" placeholder="password" v-model="form.password" />
  <br />
  <br />
  <label for="">Hobbies</label>&nbsp;&nbsp;
  <label for="">Hockey</label>&nbsp;&nbsp;
  <input type="checkbox" value="Hockey" v-model="form.hobbies" />
  &nbsp;&nbsp;
  <label for="">Cricket</label>&nbsp;&nbsp;
  <input type="checkbox" value="Cricket" v-model="form.hobbies" />
  &nbsp;&nbsp;
  <label for="">Football</label>&nbsp;&nbsp;
  <input type="checkbox" value="Football" v-model="form.hobbies" />

  <br />
  <br />
  <label for="">Gender</label>&nbsp;&nbsp;
  <label for="">Male</label>&nbsp;&nbsp;
  <input type="radio" value="Male" name="gender" v-model="form.gender" />
  &nbsp;&nbsp;
  <label for="">Female</label>&nbsp;&nbsp;
  <input
    type="radio"
    value="Female"
    name="gender"
    v-model="form.gender"
  /><br />
  <button v-on:click="login">Sign Up</button>
  <ul>
    <li v-for="item in fun" v-bind:key="item">{{ item }} Not Submitted</li>
  </ul>
</template>

<script>
export default {
  name: "form-com",
  data() {
    return {
      form: {
        username: "",
        password: "",
        hobbies: [],
        gender: [],
      },
      fun: [],
    };
  },
  methods: {
    login() {
      this.fun = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.fun.push(item);
        }
      }
      if (this.fun.length === 0) {
        alert("Information has been submitted");
      }
      console.table(this.form, this.fun);
    },
  },
};
</script>

<style>
h1 {
  font-weight: 700;
  color: red;
}
</style>
