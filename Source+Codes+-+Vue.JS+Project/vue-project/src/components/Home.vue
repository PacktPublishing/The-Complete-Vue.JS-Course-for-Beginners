<template>
  <h1>Welcome to the Home page</h1>
</template>
<script>
export default {
  name: "Home-com",
  mounted() {
    let firstuser = localStorage.getItem("user-info");
    if (!firstuser) {
      this.$router.push({ name: "Signup" });
    }
    if (!firstuser) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
