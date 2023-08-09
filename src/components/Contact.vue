<template>
  <div class="w-full h-full flex justify-center bg-white">
    <form class="w-full max-w-3xl p-6">
      <h2 class="text-2xl font-semibold mb-4 text-center">Kontaktformular</h2>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          class="w-full p-2 border border-black rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">E-Mail</label>
        <input
          type="email"
          class="w-full p-2 border border-black rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Nachricht</label>
        <textarea
          class="w-full p-2 border border-black rounded focus:outline-none focus:border-blue-500 h-40"
        ></textarea>
      </div>
      <div class="w-full text-center">
        <button
          class="w-full border border-black text-black py-2 rounded transition duration-300 max-w-3xl mx-auto"
        >
          Absenden
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // Weitere Konfiguration und Methoden
};
</script>

<style scoped>
/* Weitere individuelle Stile können hier hinzugefügt werden */
</style>
