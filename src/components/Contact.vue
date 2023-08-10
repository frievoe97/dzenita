<template>
  <div class="w-full h-full flex justify-center">
    <form class="w-full max-w-3xl">
      <h1 class="text-4xl font-semibold mb-8 mt-8 text-center">Kontakt</h1>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          class="w-full p-2 border border-black rounded focus:outline-none focus:border-blue-500 bg-transparent"
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">E-Mail</label>
        <input
          type="email"
          class="w-full p-2 border border-black rounded focus:outline-none focus:border-blue-500 bg-transparent"
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Nachricht</label>
        <textarea
          class="w-full p-2 border border-black rounded focus:outline-none focus:border-blue-500 h-40 bg-transparent"
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
