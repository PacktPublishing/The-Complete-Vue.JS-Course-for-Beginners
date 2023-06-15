<template>
  <img alt="Vue logo" src="./assets/logo.svg" width="200" />
  <h1>Call API's</h1>

  <table>
    <tr>
      <th>ID</th>
      <th>First-Name</th>
      <th>Last-Name</th>
      <th>Email</th>
      <th>Picture</th>
    </tr>
    <tr v-for="item in info" :key="item">
      <td>{{ item.id }}</td>
      <td>{{ item.first_name }}</td>

      <td>{{ item.last_name }}</td>
      <td>{{ item.email }}</td>
      <td><img :src="item.avatar" alt="" /></td>
    </tr>
  </table>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      info: [],
    };
  },
  async mounted() {
    let information = await axios.get("https://reqres.in/api/users?page=2");
    console.log("Api data", information.data.data);
    this.info = information.data.data;
  },
};
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
