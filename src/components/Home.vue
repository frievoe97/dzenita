<template>
  <div class="flex flex-col h-full items-center bg-white">
    <h1 class="text-4xl font-semibold mb-8 mt-8">Dzenitas Portfolio</h1>
    <!-- max-w-2xl -->

    <div class="carousel">
      <div class="carousel-inner">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="carousel-slide flex justify-center items-center"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div class="carousel-left">
            <h2 class="text-2xl font-semibold mb-2">{{ project.title }}</h2>
            <p class="text-gray-600">{{ project.description }}</p>
          </div>
          <div class="carousel-right relative">
            <vue-pdf-embed
              v-if="renderComponent"
              :source="project.source"
              :page="currentPage"
              :width="pdfWidth"
              :disableTextLayer="true"
              @rendering-failed="eventTest"
              @progress="loading"
            />
            <div class="carousel-arrow-btn-container">
              <button @click="prevPage" class="carousel-arrow-btn left-arrow">
                &#8249;
              </button>
              <button @click="nextPage" class="carousel-arrow-btn right-arrow">
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <button @click="prevSlide" class="carousel-control-btn">&#8249;</button>
      <button @click="nextSlide" class="carousel-control-btn">&#8250;</button>
    </div>
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed";

import { nextTick, ref } from "vue";
const renderComponent = ref(true);

const forceRender = async () => {
  // Here, we'll remove MyComponent
  renderComponent.value = false;

  // Then, wait for the change to get flushed to the DOM
  await nextTick();

  // Add MyComponent back in
  renderComponent.value = true;
};

export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      renderComponent: true,
      currentPage: 1,
      pdfWidth: 626 - 70,
      projects: [
        {
          title: "Harmonisches Stadthaus",
          description:
            "Ein modernes Stadthaus, das minimalistisches Design mit nachhaltigen Elementen verbindet. Große Fensterfronten sorgen für eine natürliche Beleuchtung und einen nahtlosen Übergang zwischen Innen- und Außenbereich. Die verwendeten Materialien wurden sorgfältig ausgewählt, um eine ästhetische Einheit mit der umgebenden Natur zu schaffen.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2018.pdf",
        },
        {
          title: "Futuristisches Wohnkomplex",
          description:
            "Ein innovativer Wohnkomplex, der durch seine futuristische Formensprache und intelligente Raumgestaltung besticht. Die Fassade besteht aus nachhaltigen Photovoltaik-Paneelen, die nicht nur Energie erzeugen, sondern auch eine dynamische Ästhetik schaffen. Jede Wohnung ist durchdacht gestaltet und bietet einzigartige Ausblicke auf die Stadtlandschaft.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2018.pdf",
        },
        {
          title: "Harmonisches Stadthaus",
          description:
            "Ein modernes Stadthaus, das minimalistisches Design mit nachhaltigen Elementen verbindet. Große Fensterfronten sorgen für eine natürliche Beleuchtung und einen nahtlosen Übergang zwischen Innen- und Außenbereich. Die verwendeten Materialien wurden sorgfältig ausgewählt, um eine ästhetische Einheit mit der umgebenden Natur zu schaffen.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2018.pdf",
        },
        {
          title: "Futuristisches Wohnkomplex",
          description:
            "Ein innovativer Wohnkomplex, der durch seine futuristische Formensprache und intelligente Raumgestaltung besticht. Die Fassade besteht aus nachhaltigen Photovoltaik-Paneelen, die nicht nur Energie erzeugen, sondern auch eine dynamische Ästhetik schaffen. Jede Wohnung ist durchdacht gestaltet und bietet einzigartige Ausblicke auf die Stadtlandschaft.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2018.pdf",
        },
        {
          title: "Harmonisches Stadthaus",
          description:
            "Ein modernes Stadthaus, das minimalistisches Design mit nachhaltigen Elementen verbindet. Große Fensterfronten sorgen für eine natürliche Beleuchtung und einen nahtlosen Übergang zwischen Innen- und Außenbereich. Die verwendeten Materialien wurden sorgfältig ausgewählt, um eine ästhetische Einheit mit der umgebenden Natur zu schaffen.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2018.pdf",
        },
        // Füge weitere Projektobjekte hinzu
      ],
      currentSlide: 0,
    };
  },
  mounted() {
    this.pdfWidth =
      document.getElementsByClassName("carousel-right")[0].clientWidth - 70;
    window.addEventListener("resize", this.resize);
  },
  methods: {
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.projects.length) % this.projects.length;
      this.currentPage = 1; // Zurücksetzen der Seitenzahl auf 1
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.projects.length;
      this.currentPage = 1; // Zurücksetzen der Seitenzahl auf 1
    },
    nextPage() {
      this.currentPage += 1;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage -= 1;
    },
    async eventTest(event) {
      console.log("Re-Render PDF!");
      this.currentPage -= 1;
      await this.forceRender();
    },
    loading(event) {
      //   console.log((100 / event.total) * event.loaded);
    },
    async forceRender() {
      // Remove MyComponent from the DOM
      this.renderComponent = false;

      // Then, wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add MyComponent back in
      this.renderComponent = true;
    },
    resize() {
      this.pdfWidth =
        document.getElementsByClassName("carousel-right")[0].clientWidth - 64;
    },
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
}

.carousel-inner {
  width: 200%;
  display: flex;

  height: 70vh; /* Hier kannst du die Höhe anpassen */
  overflow: hidden;
}

.carousel-slide {
  flex: 0 0 100%;
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease;
}

.carousel-left {
  flex: 1;
  flex-grow: 3;
  padding: 1rem;
  width: 50%;
}

.carousel-right {
  flex: 1;
  flex-grow: 4;
  padding: 1rem 2rem;
  width: 50%;
}

.carousel-right {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
}

.carousel-control-btn {
  border: none;
  background-color: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.carousel-arrow-btn-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1; /* Pfeile über PDF */
  width: calc(100% + 1rem); /* oder passende Breite */
}

.carousel-arrow-btn {
  border: none;
  background-color: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0.25rem;
  color: #333;
  margin: 0.5rem 0; /* Abstand zwischen den Pfeilen */
}

.left-arrow,
.right-arrow {
  margin: auto 1rem;
}
</style>
