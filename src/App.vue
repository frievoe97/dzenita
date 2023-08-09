<template>
  <div>
    <Navbar class="h-16" />
    <!-- <Home class="content" /> -->
    <ContentHolder class="content" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import ContentHolder from "./components/ContentHolder.vue";

export default {
  components: {
    Navbar,
    Home,
    ContentHolder,
  },
};
</script>

<style>
.content {
  height: calc(100vh - 4rem);
}

/* Du kannst hier globale Stile hinzufügen, wenn benötigt */
</style>
