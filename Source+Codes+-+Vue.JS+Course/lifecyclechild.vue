<template>
  <h1 ref="removing">Child component</h1>
</template>
<script>
export default {
  name: "life-comp",
  beforeUnmount() {
    console.log("Data beforeunmount", this.$refs["removing"]);
  },
  //   unmounted() {
  //     console.log("Data unmount", this.$refs["removing"]);
  //   },
};
</script>
