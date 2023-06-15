<template>
  <h2>login</h2>
  <h1>Name:: {{ Login }}</h1>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "Login-com",
  data() {
    return {
      Login: "",
    };
  },
  mounted() {
    const route = useRoute();
    console.table("Name", route.params.name);
    this.Login = route.params.name;
  },
};
</script>
