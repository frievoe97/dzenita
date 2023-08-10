<template>
  <div class="w-full h-full flex justify-center items-center p-20">
    <div class="w-full h-full shadow-2xl backdrop-blur-sm">
      <Home v-if="page == 'project'" />
      <Contact v-else-if="page == 'contact'" />
    </div>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Contact from "./Contact.vue";

export default {
  components: {
    Home,
    Contact,
  },
  computed: {
    page() {
      return this.$store.state.page;
    },
  },
};
</script>

<style scoped></style>
