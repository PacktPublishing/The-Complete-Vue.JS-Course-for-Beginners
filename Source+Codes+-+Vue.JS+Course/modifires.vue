<template>
  <h1>Modifires</h1>
  <input type="text" name="" placeholder="name" id="" v-model.lazy="info" />

  <h2>Submit it: {{ typeof info }}</h2>
  <h2>Submit it: {{ info }}</h2>
</template>
<script>
export default {
  name: "modifire-com",
  data() {
    return {
      info: "",
    };
  },
};
</script>
<style>
h1 {
  color: blueviolet;
  font-weight: bold;
  font-size: 30px;
}
</style>
