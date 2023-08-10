<template>
  <div>
    <Mobile v-if="isMobile" class="content" />
    <Navbar v-if="!isMobile" class="h-16" />
    <!-- <Home class="content" /> -->
    <ContentHolder v-if="!isMobile" class="content" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import ContentHolder from "./components/ContentHolder.vue";
import Mobile from "./components/Mobile.vue";

export default {
  components: {
    Navbar,
    Home,
    ContentHolder,
    Mobile,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener("resize", this.checkWindowSize);
  },
  methods: {
    checkWindowSize() {
      this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkWindowSize);
  },
};
</script>

<style>
.content {
  height: calc(100vh - 4rem);
}

body {
  background: linear-gradient(
    -45deg,
    #ee765243,
    #e73c7e51,
    #23a5d543,
    #23d5ab59
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Du kannst hier globale Stile hinzufügen, wenn benötigt */
</style>
