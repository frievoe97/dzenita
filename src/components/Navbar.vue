<template>
  <nav class="w-full bg-white shadow-xl flex justify-between items-center px-6">
    <div class="text-xl font-semibold">Dzenita - Architektin Portfolio</div>
    <ul class="flex space-x-6">
      <li>
        <a
          href="#"
          class="text-gray-700 hover:text-gray-900"
          @click="toggleMode('project')"
          >Projekte</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-gray-700 hover:text-gray-900"
          @click="toggleMode('contact')"
          >Über mich</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-gray-700 hover:text-gray-900"
          @click="toggleMode('contact')"
          >Kontakt</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMode(string) {
      this.$store.commit("setPage", string);
    },
  },
};
</script>
