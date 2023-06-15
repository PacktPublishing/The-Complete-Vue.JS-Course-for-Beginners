<template>
  <h1>beforeunmount and unmounted</h1>
  <button v-on:click="show = !show">Togglebar</button>
  <Lifecyclechild v-if="show" />
</template>
<script>
import Lifecyclechild from "./lifecyclechild.vue";
export default {
  name: "beforecreate-com",
  data() {
    return {
      counter: 0,
      show: true,
    };
  },
  components: { Lifecyclechild },
};
</script>
<style>
h1 {
  color: rgb(199, 47, 47);
  font-weight: bold;
}
</style>
