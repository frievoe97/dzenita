<template>
  <div class="flex flex-col h-full items-center">
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
            <p class="mt-4"><a :href="project.source">Download Portfolio</a></p>
          </div>
          <div class="carousel-right relative">
            <svg
              :class="{ invisible: loaded }"
              aria-hidden="true"
              class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="black"
              />
            </svg>
            <vue-pdf-embed
              v-if="renderComponent"
              ref="pdfRef"
              :source="project.source"
              :page="currentPage"
              :disableTextLayer="true"
              :width="pdfWidth"
              :height="pdfHeight"
              @rendering-failed="eventTest"
              @progress="loading"
              @rendered="handleDocumentRender(index)"
              class="shadow-2xl"
              :class="{ invisible: !loaded }"
            />
            <div
              class="carousel-arrow-btn-container"
              :class="{ invisible: !loaded }"
            >
              <button @click="prevPage" class="carousel-arrow-btn left-arrow">
                &#8249;
              </button>
              <button @click="nextPage" class="carousel-arrow-btn right-arrow">
                &#8250;
              </button>
            </div>
            <p class="pdfPageCount" :class="{ invisible: !loaded }">
              {{ currentPage }} / {{ project.pageCount }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <button @click="prevSlide" class="carousel-control-btn">&#8249;</button>
      <p class="carousel-control-number">{{ currentSlide + 1 }}</p>
      <p class="carousel-control-number">/</p>
      <p class="carousel-control-number">{{ projects.length }}</p>
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
      isLoading: true,
      pageCount: 1,
      loaded: false,
      renderComponent: true,
      currentPage: 1,
      pdfWidth: 626 - 80,
      pdfHeight: 100,
      projects: [
        {
          title: "Harmonisches Stadthaus",
          description:
            "Ein modernes Stadthaus, das minimalistisches Design mit nachhaltigen Elementen verbindet. Große Fensterfronten sorgen für eine natürliche Beleuchtung und einen nahtlosen Übergang zwischen Innen- und Außenbereich. Die verwendeten Materialien wurden sorgfältig ausgewählt, um eine ästhetische Einheit mit der umgebenden Natur zu schaffen.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2018.pdf",
          pageCount: 1,
        },
        {
          title: "Futuristisches Wohnkomplex",
          description:
            "Ein innovativer Wohnkomplex, der durch seine futuristische Formensprache und intelligente Raumgestaltung besticht. Die Fassade besteht aus nachhaltigen Photovoltaik-Paneelen, die nicht nur Energie erzeugen, sondern auch eine dynamische Ästhetik schaffen. Jede Wohnung ist durchdacht gestaltet und bietet einzigartige Ausblicke auf die Stadtlandschaft.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2019.pdf",
          pageCount: 1,
        },
        {
          title: "Harmonisches Stadthaus",
          description:
            "Ein modernes Stadthaus, das minimalistisches Design mit nachhaltigen Elementen verbindet. Große Fensterfronten sorgen für eine natürliche Beleuchtung und einen nahtlosen Übergang zwischen Innen- und Außenbereich. Die verwendeten Materialien wurden sorgfältig ausgewählt, um eine ästhetische Einheit mit der umgebenden Natur zu schaffen.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2018.pdf",
          pageCount: 1,
        },
        {
          title: "Futuristisches Wohnkomplex",
          description:
            "Ein innovativer Wohnkomplex, der durch seine futuristische Formensprache und intelligente Raumgestaltung besticht. Die Fassade besteht aus nachhaltigen Photovoltaik-Paneelen, die nicht nur Energie erzeugen, sondern auch eine dynamische Ästhetik schaffen. Jede Wohnung ist durchdacht gestaltet und bietet einzigartige Ausblicke auf die Stadtlandschaft.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2018.pdf",
          pageCount: 1,
        },
        {
          title: "Harmonisches Stadthaus",
          description:
            "Ein modernes Stadthaus, das minimalistisches Design mit nachhaltigen Elementen verbindet. Große Fensterfronten sorgen für eine natürliche Beleuchtung und einen nahtlosen Übergang zwischen Innen- und Außenbereich. Die verwendeten Materialien wurden sorgfältig ausgewählt, um eine ästhetische Einheit mit der umgebenden Natur zu schaffen.",
          source:
            "https://raw.githubusercontent.com/frievoe97/dzenita/main/src/assets/portfolio-2018.pdf",
          pageCount: 1,
        },
        // Füge weitere Projektobjekte hinzu
      ],
      currentSlide: 0,
    };
  },
  watch: {
    loaded: function () {
      console.log(this.loaded);
    },
  },
  async mounted() {
    this.pdfWidth =
      document.getElementsByClassName("carousel-right")[0].clientWidth - 70;
    this.pdfHeight =
      document.getElementsByClassName("carousel-right")[0].clientHeight - 70;
    window.addEventListener("resize", this.resize);
    await this.forceRender();
  },
  methods: {
    prevSlide() {
      this.currentPage = 1; // Zurücksetzen der Seitenzahl auf 1
      this.currentSlide =
        (this.currentSlide - 1 + this.projects.length) % this.projects.length;
    },
    nextSlide() {
      this.currentPage = 1; // Zurücksetzen der Seitenzahl auf 1
      this.currentSlide = (this.currentSlide + 1) % this.projects.length;
    },
    nextPage() {
      if (this.projects[this.currentSlide].pageCount != this.currentPage) {
        this.currentPage += 1;
      } else {
        this.currentPage = 1;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      } else {
        this.currentPage = this.projects[this.currentSlide].pageCount;
      }
    },
    async eventTest(event) {
      console.log("Re-Render PDF!");
      // this.currentPage -= 1;
      // await this.forceRender();
      // this.currentPage -= 1;
    },
    loading(event) {
      //   console.log((100 / event.total) * event.loaded);
      if (event.total == event.loaded) {
        // this.loaded = true;
        console.log("Loaded");
      }
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
      // this.loaded = false;
      this.pdfWidth =
        document.getElementsByClassName("carousel-right")[0].clientWidth - 80;
      this.pdfHeight =
        document.getElementsByClassName("carousel-right")[0].clientHeight - 80;
      this.forceRender;
    },
    handleDocumentRender(index) {
      // console.log("handleDocumentRender");
      this.loaded = true;
      this.projects[index].pageCount = this.$refs.pdfRef[index].pageCount;
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

.carousel-control-number {
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 1.7rem 0.5rem 0rem 0.5rem;
  /* padding-top: 1.7rem; */
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

.pdfPageCount {
  position: absolute;
  bottom: -20px;
}
</style>
