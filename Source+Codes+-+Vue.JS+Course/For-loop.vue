<template>
  <!-- <h1 id="pages3">For Loop</h1>
  <ul>
    <li v-for="program in technology" :key="program">
      {{ program }}
    </li>
  </ul> -->
  <br />
  <!-- <ul>
    <li v-for="data in user" :key="data">Name is : {{ data.name }}</li>
    <li v-for="data in user" :key="data">Email is : {{ data.email }}</li>
    <li v-for="data in user" :key="data">contact is : {{ data.contact }}</li>
  </ul> -->
  <Child name="Tony stark" :user="user" :getData="getData" />
</template>
<script>
import Child from "./child.vue";
export default {
  name: "For-loop",
  // data() {
  //   return {
  //     technology: ["PHP", "JavaScript", "C++", "C-sharp"],
  //     user: [
  //       {
  //         name: "Jack",
  //         email: "jack002@gmail.com",
  //         contact: +94245555521,
  //       },
  //       {
  //         name: "Stark",
  //         email: "starkk002@gmail.com",
  //         contact: +94245555521,
  //       },
  //       {
  //         name: "Tony",
  //         email: "tony002@gmail.com",
  //         contact: +94245555521,
  //       },
  //     ],
  //   };
  // },
  data() {
    return {
      user: { name: "Tony", email: "tony@gmail.com" },
    };
  },
  methods: {
    getData() {
      alert("Methods called");
    },
  },
  components: { Child },
};
</script>
<style>
#pages3 {
  color: rgb(211, 25, 0);
}
</style>
