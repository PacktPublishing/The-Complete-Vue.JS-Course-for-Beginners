<template>
  <h1>Student Name:{{ name }}</h1>
</template>
<script>
export default {
  name: "student-com",
  props: {
    name: String,
  },
};
</script>
