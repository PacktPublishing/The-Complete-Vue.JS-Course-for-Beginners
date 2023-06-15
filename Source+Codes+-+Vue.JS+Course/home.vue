<template>
  <h1>Home</h1>
  <button @click="active = 'Frist'">First</button>
  <button @click="active = 'Second'">Second</button>
  <button @click="active = 'Thrid'">Third</button>
  <button @click="active = 'watchers'">watcher</button>
  <!-- <Watchers /> -->
  <!-- <Frist />
  <Second />
  <Thrid /> -->
  <component :is="active" />
  <teleport to="#header">
    <Header />
  </teleport>
</template>
<script>
import Frist from "./frist.vue";
import Second from "./second.vue";
import Thrid from "./thrid.vue";
import Watchers from "./watchers.vue";
import Header from "./header.vue";
export default {
  name: "home-com",
  components: { Frist, Second, Thrid, Watchers, Header },
  data() {
    console.error("faf");
    return {
      active: "frist",
    };
  },

  beforeCreate() {
    alert("hello");
  },
  created() {
    alert("hhello");
  },
};
</script>
