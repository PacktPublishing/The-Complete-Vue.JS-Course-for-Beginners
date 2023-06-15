<template>
  <h1>Teacher Name:{{ name }}</h1>
  <button v-on:click="getUser(userName)">Get the Name</button>
</template>
<script>
export default {
  name: "Teacher-com",
  props: {
    name: String,
    getUser: Function,
  },
  data() {
    return {
      userName: "clark",
    };
  },
};
</script>
