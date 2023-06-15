<template>
  <!-- <h1>child components</h1>
  <h3>{{ name }}</h3>
  <h3>{{ user.name }}</h3>
  <button v-on:click="getData()">Call the Function</button> -->
  <!-- <ul>
    <li v-for="item in users" :key="item">
      <Newuser :data="item" />
    </li>
  </ul>
  <div>
    <h1 v-html="emailadress"></h1>
    <h1 v-html="id"></h1>
  </div> -->
  <!-- <h1>Class Binding</h1>
  <h3 :class="{ yellow: color }">Dynamic class</h3>
  <button v-on:click="color = !color">change the color</button> -->
  <Newuser />
</template>
<script>
import Newuser from "./newuser.vue";
export default {
  name: "child-components",
  props: {
    name: String,
    user: Object,
    getData: Function,
  },
  data() {
    return {
      // users: [
      //   {
      //     name: "jackson",
      //     email: "jackson454@gmail.com",
      //   },
      //   {
      //     name: "jamws",
      //     email: "james4564@gmail.com",
      //   },
      //   {
      //     name: "Henry",
      //     email: "Henry@gmail.com",
      //   },
      //   {
      //     name: "Oliver",
      //     email: "Oliver788@gmail.com",
      //   },
      //   {
      //     name: "Tony",
      //     email: "Tony3004@gmail.com",
      //   },
      // ],
      // names: "peter",
      // emailadress: "<h3>peter123@gmail.com<h3/>",
      // id: "<h3> 16465466 <h3/>",
      // color: false,
    };
  },
  components: { Newuser },
};
</script>
<style>
.yellow {
  color: blue;
  font-weight: bold;
  background-color: yellow;
  width: 150px;
  height: 50px;
}
</style>
