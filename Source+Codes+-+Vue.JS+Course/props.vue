<template>
  <h1>Props</h1>
  <Nonprops info="Hello world" id="name" />
</template>
<script>
import Nonprops from "./nonprops.vue";
export default {
  name: "props-com",
  components: { Nonprops },
};
</script>
<style>
h1 {
  color: blueviolet;
  font-weight: bold;
  font-size: 30px;
}
</style>
