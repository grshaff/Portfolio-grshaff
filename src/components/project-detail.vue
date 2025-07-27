<template>
  <section class="py-8 bg-white md:py-1 md:mt-8 mx-4 lg:mx-6">
    <div class="max-w-screen-xl px-4 2xl:px-0 mx-auto">
      <div class="lg:flex gap-6">
        <div class="grow sm:max-w-md md:max-w-xl xl:max-w-4xl w-full mx-auto lg:max-w-3xl">
          <!-- Slider -->
          <div 
            data-hs-carousel='{
              "loadingClasses": "opacity-0"
            }' 
            class="relative"
          >
            <div class="hs-carousel flex flex-col md:flex-row gap-2">
              <div class="relative grow overflow-hidden min-h-50 min-w-64 w-full lg:min-h-80 xl:min-h-100 bg-white rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 w-full flex flex-nowrap transition-transform duration-700">
                  <div class="hs-carousel-slide w-full flex-shrink-0">
                    <div 
                      @click="showModal('https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces')" 
                      class="cursor-pointer w-full h-full relative"
                    >
                      <img 
                        src='https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces' 
                        class="w-full h-full object-cover transition duration-700 rounded-lg"
                        alt="Product Image"
                      />
                    </div>
                  </div>
                  <div class="hs-carousel-slide w-full flex-shrink-0">
                    <div 
                      @click="showModal('')"
                      class="cursor-pointer w-full h-full relative"
                    >
                      <img 
                        src="" 
                        class="w-full h-full object-cover transition duration-700 rounded-lg"
                        alt="Second Image"
                      />
                    </div>
                  </div>
                  <div class="hs-carousel-slide w-full flex-shrink-0">
                    <div 
                      @click="showModal('')"
                      class="cursor-pointer w-full h-full relative"
                    >
                      <img 
                        src="" 
                        class="w-full h-full object-cover transition duration-700 rounded-lg"
                        alt="Third Image"
                      />
                    </div>
                  </div>
                </div>
                
                <button 
                  type="button" 
                  class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-white hover:bg-black/20 focus:outline-none focus:bg-black/20 rounded-s-lg z-10 bg-black/10"
                >
                  <span class="text-2xl" aria-hidden="true">
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </span>
                  <span class="sr-only">Previous</span>
                </button>
                
                <button 
                  type="button" 
                  class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-white hover:bg-black/20 focus:outline-none focus:bg-black/20 rounded-e-lg z-10 bg-black/10"
                >
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
                      <img 
                        src='https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=80&h=80&q=90&fit=crop' 
                        class="w-full h-full object-cover"
                        alt="Thumbnail 1"
                      />
                    </div>
                  </div>
                  <div class="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-blue-400 hover:border-blue-300 transition-colors">
                    <div class="size-full">
                      <img 
                        src="" 
                        class="w-full h-full object-cover"
                        alt="Thumbnail 2"
                      />
                    </div>
                  </div>
                  <div class="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-blue-400 hover:border-blue-300 transition-colors">
                    <div class="size-full">
                      <img 
                        src="" 
                        class="w-full h-full object-cover"
                        alt="Thumbnail 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mobile-Optimized Modal -->
        <div 
          ref="modal" 
          id="modal"
          class="hidden fixed top-0 left-0 z-50 w-screen h-screen bg-black/95 flex justify-center items-center"
          @click="handleModalClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <!-- Mobile-friendly close button -->
          <button 
            class="fixed z-60 top-4 right-4 md:top-6 md:right-8 text-white text-3xl md:text-4xl font-bold hover:text-gray-300 transition-colors bg-black/60 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center touch-manipulation" 
            @click="closeModal"
          >
            &times;
          </button>
          
          <!-- Mobile-friendly zoom controls -->
          <div class="fixed z-60 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black/60 rounded-full px-4 py-2">
            <button 
              @click="zoomOut"
              class="text-white hover:text-gray-300 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors touch-manipulation"
              title="Zoom Out"
            >
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"/>
              </svg>
            </button>
            
            <button 
              @click="resetZoom"
              class="text-white hover:text-gray-300 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors touch-manipulation"
              title="Fit to Screen"
            >
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
            </button>
            
            <button 
              @click="zoomIn"
              class="text-white hover:text-gray-300 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors touch-manipulation"
              title="Zoom In"
            >
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </button>
          </div>
          
          <!-- Zoom level indicator -->
          <div 
            class="fixed z-60 top-4 left-4 md:top-6 md:left-8 text-white bg-black/60 px-3 py-1 rounded-full text-sm"
          >
            {{ displayZoomPercentage }}%
          </div>
          
          <!-- Modal image container -->
          <div 
            ref="imageContainer"
            class="relative w-full h-full flex items-center justify-center overflow-hidden p-2 md:p-4"
            @mousedown="startPan"
            @mousemove="handlePan"
            @mouseup="endPan"
            @mouseleave="endPan"
            @wheel="handleWheel"
          >
            <img 
              ref="modalImg" 
              id="modal-img" 
              class="transition-transform duration-300 ease-out select-none touch-manipulation"
              :class="[
                currentZoom > baseZoom ? 'cursor-move' : 'cursor-zoom-in',
                isDragging ? 'cursor-grabbing' : ''
              ]"
              :style="{
                transform: `scale(${currentZoom}) translate(${panX}px, ${panY}px)`,
                transformOrigin: 'center center',
                maxWidth: 'none',
                maxHeight: 'none',
                width: 'auto',
                height: 'auto'
              }"
              @click="handleImageClick"
              @dragstart="$event.preventDefault()"
              @load="handleImageLoad"
              alt="Modal Image"
            />
          </div>
          
          <!-- Mobile instructions -->
          <div class="fixed z-60 top-4 left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm bg-black/60 px-3 py-1 rounded-lg text-center">
            <div class="md:hidden">Pinch to zoom • Tap to zoom • Drag to pan</div>
            <div class="hidden md:block">Click to zoom • Scroll to zoom • Drag to pan</div>
          </div>
        </div>
        
        <!-- Product details -->
        <div class="lg:max-w-sm mt-6 sm:mt-8 lg:mt-0 xl:min-w-sm 2xl:min-w-xl">
          <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
            Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
            Mac OS, Pink
          </h1>
          
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Tech Stack:
            </p>
          </div>
          
          <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <a
              href="#"
              title=""
              class="w-full flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-200 focus:outline-none bg-black rounded-xl border border-gray-200 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 transition-colors"
              role="button"
            >
              Visit website
            </a>
          </div>
          
          <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
          
          <p class="mb-6 text-gray-500 dark:text-gray-400">
            Studio quality three mic array for crystal clear calls and voice
            recordings. Six-speaker sound system for a remarkably robust and
            high-quality audio experience. Up to 256GB of ultrafast SSD storage.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Modal and image references
const modal = ref(null)
const modalImg = ref(null)
const imageContainer = ref(null)

// Zoom and pan state
const baseZoom = ref(1) // The actual scale value for "100%" display
const currentZoom = ref(1) // Current actual zoom level
const panX = ref(0)
const panY = ref(0)
const isDragging = ref(false)
const lastMouseX = ref(0)
const lastMouseY = ref(0)

// Touch handling
const touches = ref([])
const lastTouchDistance = ref(0)
const isTouch = ref(false)

// Device detection
const isMobile = ref(false)

// Zoom settings
const zoomStep = 0.5

// Computed property for display zoom percentage
const displayZoomPercentage = computed(() => {
  // Show zoom relative to base zoom as percentage
  return Math.round((currentZoom.value / baseZoom.value) * 50) // 50% is the "base" display level
})

function detectMobile() {
  isMobile.value = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function showModal(src) {
  console.log("Modal opened")
  detectMobile()
  
  if (modal.value) {
    modal.value.classList.remove('hidden')
    modal.value.classList.add('flex')
  }
  if (modalImg.value) {
    modalImg.value.src = src
  }
  // Reset zoom and pan when opening modal
  resetZoom()
}

function closeModal() {
  if (modal.value) {
    modal.value.classList.add('hidden')
    modal.value.classList.remove('flex')
  }
  resetZoom()
}

function handleImageLoad() {
  // Calculate the base zoom level based on device type
  if (modalImg.value && imageContainer.value) {
    const img = modalImg.value
    const container = imageContainer.value
    
    const containerWidth = container.clientWidth - (isMobile.value ? 16 : 32) // Less padding on mobile
    const containerHeight = container.clientHeight - (isMobile.value ? 16 : 32)
    
    const imgWidth = img.naturalWidth
    const imgHeight = img.naturalHeight
    
    let scaleX = containerWidth / imgWidth
let scaleY = containerHeight / imgHeight
let scale = Math.min(scaleX, scaleY)

// Mobile tweak: artificially boost scale if it's too small
if (isMobile.value && scale < 0.6) {
  scale *= 4 // or 1.8 or whatever looks best in testing
}

baseZoom.value = scale
    
    currentZoom.value = baseZoom.value
    panX.value = 0
    panY.value = 0
  }
}

function handleModalClick(event) {
  // Close modal if clicking on the background (not the image)
  if (event.target === modal.value || event.target === imageContainer.value) {
    closeModal()
  }
}

function handleImageClick(event) {
  event.stopPropagation()
  // Toggle zoom on image click
  if (currentZoom.value === baseZoom.value) {
    zoomIn()
  } else {
    resetZoom()
  }
}

function zoomIn() {
  const maxZoom = baseZoom.value * (isMobile.value ? 8 : 4) // Higher max zoom on mobile
  const newZoom = Math.min(currentZoom.value + (baseZoom.value * zoomStep), maxZoom)
  currentZoom.value = newZoom
}

function zoomOut() {
  const minZoom = baseZoom.value * (isMobile.value ? 0.25 : 0.5) // Allow zooming out more on mobile
  const newZoom = Math.max(currentZoom.value - (baseZoom.value * zoomStep), minZoom)
  currentZoom.value = newZoom
  
  // Reset pan if zoomed out to base level or below
  if (currentZoom.value <= baseZoom.value) {
    panX.value = 0
    panY.value = 0
  }
}

function resetZoom() {
  currentZoom.value = baseZoom.value
  panX.value = 0
  panY.value = 0
}

function handleWheel(event) {
  event.preventDefault()
  const delta = event.deltaY > 0 ? -0.2 : 0.2
  const minZoom = baseZoom.value * (isMobile.value ? 0.25 : 0.5)
  const maxZoom = baseZoom.value * (isMobile.value ? 8 : 4)
  
  const newZoom = Math.max(minZoom, Math.min(maxZoom, currentZoom.value + (baseZoom.value * delta)))
  currentZoom.value = newZoom
  
  if (currentZoom.value <= baseZoom.value) {
    panX.value = 0
    panY.value = 0
  }
}

// Mouse pan handling
function startPan(event) {
  if (currentZoom.value > baseZoom.value) {
    isDragging.value = true
    lastMouseX.value = event.clientX
    lastMouseY.value = event.clientY
  }
}

function handlePan(event) {
  if (isDragging.value && currentZoom.value > baseZoom.value) {
    const deltaX = event.clientX - lastMouseX.value
    const deltaY = event.clientY - lastMouseY.value
    
    panX.value += deltaX / currentZoom.value
    panY.value += deltaY / currentZoom.value
    
    lastMouseX.value = event.clientX
    lastMouseY.value = event.clientY
  }
}

function endPan() {
  isDragging.value = false
}

// Touch handling for mobile
function handleTouchStart(event) {
  isTouch.value = true
  touches.value = Array.from(event.touches)
  
  if (touches.value.length === 1) {
    // Single touch - start panning
    if (currentZoom.value > baseZoom.value) {
      isDragging.value = true
      lastMouseX.value = touches.value[0].clientX
      lastMouseY.value = touches.value[0].clientY
    }
  } else if (touches.value.length === 2) {
    // Two touches - start pinch zoom
    isDragging.value = false
    const distance = getTouchDistance(touches.value[0], touches.value[1])
    lastTouchDistance.value = distance
  }
}

function handleTouchMove(event) {
  event.preventDefault()
  touches.value = Array.from(event.touches)
  
  if (touches.value.length === 1 && isDragging.value) {
    // Single touch panning
    const deltaX = touches.value[0].clientX - lastMouseX.value
    const deltaY = touches.value[0].clientY - lastMouseY.value
    
    panX.value += deltaX / currentZoom.value
    panY.value += deltaY / currentZoom.value
    
    lastMouseX.value = touches.value[0].clientX
    lastMouseY.value = touches.value[0].clientY
  } else if (touches.value.length === 2) {
    // Pinch zoom
    const distance = getTouchDistance(touches.value[0], touches.value[1])
    const scale = distance / lastTouchDistance.value
    
    const minZoom = baseZoom.value * 0.25
    const maxZoom = baseZoom.value * 8
    
    const newZoom = Math.max(minZoom, Math.min(maxZoom, currentZoom.value * scale))
    
    currentZoom.value = newZoom
    lastTouchDistance.value = distance
    
    if (currentZoom.value <= baseZoom.value) {
      panX.value = 0
      panY.value = 0
    }
  }
}

function handleTouchEnd(event) {
  touches.value = Array.from(event.touches)
  
  if (touches.value.length === 0) {
    isDragging.value = false
    isTouch.value = false
  } else if (touches.value.length === 1) {
    // Reset for single touch
    lastMouseX.value = touches.value[0].clientX
    lastMouseY.value = touches.value[0].clientY
  }
}

function getTouchDistance(touch1, touch2) {
  const dx = touch1.clientX - touch2.clientX
  const dy = touch1.clientY - touch2.clientY
  return Math.sqrt(dx * dx + dy * dy)
}

// Keyboard shortcuts
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
  detectMobile()
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Ensure carousel body is visible */
.hs-carousel-body {
  opacity: 1 !important;
}

/* Ensure slides take full width */
.hs-carousel-slide {
  width: 100%;
  flex-shrink: 0;
}

/* Touch-friendly interactions */
.touch-manipulation {
  touch-action: manipulation;
}

/* Custom cursor styles */
.cursor-zoom-in {
  cursor: zoom-in;
}

.cursor-grabbing {
  cursor: grabbing;
}

/* Smooth transitions */
.transition-transform {
  transition: transform 0.3s ease-out;
}

/* Prevent text selection on touch devices */
.select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Improve touch targets */
@media (max-width: 768px) {
  .touch-manipulation {
    min-height: 44px;
    min-width: 44px;
  }
}
</style>