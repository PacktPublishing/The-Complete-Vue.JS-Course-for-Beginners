<template>
  <h1>Non Props</h1>
  <h2>{{ info }}</h2>
  <div v-bind="$attrs">
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <p v-bind="$attrs">Lorem ipsum dolor sit amet.</p>
    <h2>{{ info }}</h2>
  </div>
</template>
<script>
export default {
  name: "nonprops-com",
  inheritAttrs: false,
  props: {
    info: String,
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
