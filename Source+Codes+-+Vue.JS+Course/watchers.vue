<template>
  <h1>Watchers</h1>
  <h2>{{ counter }}</h2>
  <button v-on:click="counter = counter + 1">+</button>
  <button v-on:click="counter = counter - 1">-</button>
  <Childslot>
    <template v-slot:header><h1>First Heading</h1></template>
    <template v-slot:section><h1>Product Name:</h1></template>
    <template v-slot:main><h1>Price$:</h1></template>
    <template v-slot:footer><button>Buy Now</button></template>
  </Childslot>
  <br />
  <Childslot>
    <template v-slot:header><h1>Brand</h1></template>
    <template v-slot:section><h1>Product Name:</h1></template>
    <template v-slot:main><h1>Price$:</h1></template>
    <template v-slot:footer><button>Buy Now</button></template>
  </Childslot>
</template>

<script>
import Childslot from "./childslot.vue";
export default {
  name: "Watchers - com",
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(num, last) {
      if (num > 10 && num > last) {
        alert("Maximum Number is 10");
        this.counter = 0;
      }
    },
  },
  components: { Childslot },
};
</script>
