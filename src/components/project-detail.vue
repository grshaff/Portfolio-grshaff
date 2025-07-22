<template>
  <section class="py-8 bg-white md:py-1 md:mt-8 mx-4 lg:mx-6">
    <div class="max-w-screen-xl px-4 2xl:px-0 mx-auto">
      <div class="lg:flex gap-6">
        <div class="grow sm:max-w-md md:max-w-xl xl:max-w-4xl w-full mx-auto lg:max-w-3xl">
          <!-- Slider -->
          <div data-hs-carousel='{ "loadingClasses": "opacity-0" }' class="relative">
            <div class="hs-carousel flex flex-col md:flex-row gap-2">
              <div class="relative grow overflow-hidden min-h-50 min-w-64 w-full lg:min-h-80 xl:min-h-100 bg-white rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 w-full flex flex-nowrap transition-transform duration-700">
                  <div class="hs-carousel-slide w-full flex-shrink-0">
                    <div @click="showModal(img1)" class="cursor-pointer w-full h-full relative">
                      <img :src="img1" class="w-full h-full object-cover transition duration-700 rounded-lg" alt="Product Image" />
                    </div>
                  </div>
                  <div class="hs-carousel-slide w-full flex-shrink-0">
                    <div @click="showModal(img2)" class="cursor-pointer w-full h-full relative">
                      <img :src="img2" class="w-full h-full object-cover transition duration-700 rounded-lg" alt="Second Image" />
                    </div>
                  </div>
                  <div class="hs-carousel-slide w-full flex-shrink-0">
                    <div @click="showModal(img3)" class="cursor-pointer w-full h-full relative">
                      <img :src="img3" class="w-full h-full object-cover transition duration-700 rounded-lg" alt="Third Image" />
                    </div>
                  </div>
                </div>
                <!-- Navigation buttons remain the same -->
                <button type="button" class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-white hover:bg-black/20 focus:outline-none focus:bg-black/20 rounded-s-lg z-10 bg-black/10">
                  <span class="text-2xl" aria-hidden="true">
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </span>
                  <span class="sr-only">Previous</span>
                </button>
                <button type="button" class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-white hover:bg-black/20 focus:outline-none focus:bg-black/20 rounded-e-lg z-10 bg-black/10">
                  <span class="sr-only">Next</span>
                  <span class="text-2xl" aria-hidden="true">
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div class="md:order-1 flex-none my-auto">
                <div class="hs-carousel-pagination max-h-96 flex flex-row md:flex-col gap-2 justify-evenly">
                  <div class="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-blue-400 hover:border-blue-300 transition-colors">
                    <div class="size-full">
                      <img :src="img1" class="w-full h-full object-cover" alt="Thumbnail 1" />
                    </div>
                  </div>
                  <div class="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-blue-400 hover:border-blue-300 transition-colors">
                    <div class="size-full">
                      <img :src="img2" class="w-full h-full object-cover" alt="Thumbnail 2" />
                    </div>
                  </div>
                  <div class="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-blue-400 hover:border-blue-300 transition-colors">
                    <div class="size-full">
                      <img :src="img3" class="w-full h-full object-cover" alt="Thumbnail 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal remains the same -->
        <div ref="modal" id="modal" class="hidden fixed top-0 left-0 z-50 w-screen h-screen bg-black/90 flex justify-center items-center" @click="handleModalClick">
          <!-- Modal content remains the same -->
          <button class="fixed z-60 top-6 right-8 text-white text-4xl font-bold hover:text-gray-300 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center" @click="closeModal">
            &times;
          </button>
          <div class="fixed z-60 top-6 left-8 flex gap-2">
            <button @click="zoomIn" class="text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors" title="Zoom In">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </button>
            <button @click="zoomOut" class="text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors" title="Zoom Out">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"/>
              </svg>
            </button>
            <button @click="resetZoom" class="text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors" title="Reset Zoom">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </button>
          </div>
          <div v-if="zoomLevel !== 1" class="fixed z-60 bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
            {{ Math.round(zoomLevel * 100) }}%
          </div>
          <div ref="imageContainer" class="relative w-full h-full flex items-center justify-center overflow-hidden" @mousedown="startPan" @mousemove="handlePan" @mouseup="endPan" @mouseleave="endPan" @wheel="handleWheel">
            <img ref="modalImg" id="modal-img" class="max-w-none transition-transform duration-300 ease-out select-none" :class="[
              zoomLevel > 1 ? 'cursor-move' : 'cursor-zoom-in',
              isDragging ? 'cursor-grabbing' : ''
            ]" :style="{
              transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
              transformOrigin: 'center center'
            }" @click="handleImageClick" @dragstart="$event.preventDefault()" alt="Modal Image" />
          </div>
          <div class="fixed z-60 bottom-6 right-8 text-white text-sm bg-black/50 px-3 py-2 rounded-lg">
            <div>Click image to zoom</div>
            <div>Scroll to zoom</div>
            <div v-if="zoomLevel > 1">Drag to pan</div>
          </div>
        </div>

        <!-- Product details -->
        <div class="lg:max-w-sm mt-6 sm:mt-8 lg:mt-0 xl:min-w-sm 2xl:min-w-xl">
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            {{ name }}
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p class="text-xl font-semibold text-gray-900 sm:text-2xl">
              Tech Stack: <span class="font-light">{{ techStack }}</span>
            </p>
          </div>
          <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <a :href="url" title="" class="w-full flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-200 focus:outline-none bg-black rounded-xl border border-gray-200 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 transition-colors" role="button">
              Visit website
            </a>
          </div>
          <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
          <p class="mb-6 text-gray-500 dark:text-gray-400">
            {{ longDesc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Define props with correct names matching your data structure
defineProps({
  id: String,
  name: String,
  logo: String,
  desc: String,
  longDesc: String,
  techStack: String,
  img1: String,
  img2: String,
  img3: String,
  status: Boolean,
  url: String
})

// Rest of your script remains the same...
const modal = ref(null)
const modalImg = ref(null)
const imageContainer = ref(null)

const zoomLevel = ref(1)
const panX = ref(0)
const panY = ref(0)
const isDragging = ref(false)
const lastMouseX = ref(0)
const lastMouseY = ref(0)

const minZoom = 0.5
const maxZoom = 3
const zoomStep = 0.5

function showModal(src) {
  console.log("Modal opened")
  if (modal.value) {
    modal.value.classList.remove('hidden')
    modal.value.classList.add('flex')
  }
  if (modalImg.value) {
    modalImg.value.src = src
  }
  resetZoom()
}

function closeModal() {
  if (modal.value) {
    modal.value.classList.add('hidden')
    modal.value.classList.remove('flex')
  }
  resetZoom()
}

function handleModalClick(event) {
  if (event.target === modal.value || event.target === imageContainer.value) {
    closeModal()
  }
}

function handleImageClick(event) {
  event.stopPropagation()
  if (zoomLevel.value === 1) {
    zoomIn()
  } else {
    resetZoom()
  }
}

function zoomIn() {
  if (zoomLevel.value < maxZoom) {
    zoomLevel.value = Math.min(zoomLevel.value + zoomStep, maxZoom)
  }
}

function zoomOut() {
  if (zoomLevel.value > minZoom) {
    zoomLevel.value = Math.max(zoomLevel.value - zoomStep, minZoom)
    if (zoomLevel.value === 1) {
      panX.value = 0
      panY.value = 0
    }
  }
}

function resetZoom() {
  zoomLevel.value = 1
  panX.value = 0
  panY.value = 0
}

function handleWheel(event) {
  event.preventDefault()
  const delta = event.deltaY > 0 ? -0.2 : 0.2
  const newZoom = Math.max(minZoom, Math.min(maxZoom, zoomLevel.value + delta))
  zoomLevel.value = newZoom
  if (zoomLevel.value === 1) {
    panX.value = 0
    panY.value = 0
  }
}

function startPan(event) {
  if (zoomLevel.value > 1) {
    isDragging.value = true
    lastMouseX.value = event.clientX
    lastMouseY.value = event.clientY
  }
}

function handlePan(event) {
  if (isDragging.value && zoomLevel.value > 1) {
    const deltaX = event.clientX - lastMouseX.value
    const deltaY = event.clientY - lastMouseY.value
    panX.value += deltaX / zoomLevel.value
    panY.value += deltaY / zoomLevel.value
    lastMouseX.value = event.clientX
    lastMouseY.value = event.clientY
  }
}

function endPan() {
  isDragging.value = false
}

function handleKeydown(event) {
  if (modal.value && !modal.value.classList.contains('hidden')) {
    switch (event.key) {
      case 'Escape':
        closeModal()
        break
      case '+':
      case '=':
        event.preventDefault()
        zoomIn()
        break
      case '-':
        event.preventDefault()
        zoomOut()
        break
      case '0':
        event.preventDefault()
        resetZoom()
        break
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.hs-carousel-body {
  opacity: 1 !important;
}

.hs-carousel-slide {
  width: 100%;
  flex-shrink: 0;
}

.cursor-zoom-in {
  cursor: zoom-in;
}

.cursor-grabbing {
  cursor: grabbing;
}

.transition-transform {
  transition: transform 0.3s ease-out;
}
</style>