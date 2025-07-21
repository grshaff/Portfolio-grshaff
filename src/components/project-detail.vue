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
                    <!-- Removed padding and centering, made image fill container -->
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
                    <!-- Example with another image -->
                    <div class="w-full h-full relative">
                      <img 
                        src="" 
                        class="w-full h-full object-cover transition duration-700 rounded-lg"
                        alt="Second Image"
                      />
                    </div>
                  </div>
                  <div class="hs-carousel-slide w-full flex-shrink-0">
                    <!-- Example with third image -->
                    <div class="w-full h-full relative">
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
        
        <!-- Modal -->
        <div 
          ref="modal" 
          id="modal"
          class="hidden fixed top-0 left-0 z-50 w-screen h-screen bg-black/70 flex justify-center items-center"
        >
          <!-- Close button -->
          <button 
            class="fixed z-60 top-6 right-8 text-white text-5xl font-bold hover:text-gray-300 transition-colors" 
            @click="closeModal()"
          >
            &times;
          </button>
          <!-- Modal image -->
          <div class="h-full flex items-center justify-center p-4">
            <img 
              ref="modalImg" 
              id="modal-img" 
              class="max-w-full max-h-full object-contain" 
              alt="Modal Image"
            />
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
import { ref, onMounted } from 'vue'

// Reference for modal and modal image
const modal = ref(null)
const modalImg = ref(null)

function showModal(src) {
  console.log("clicked")
  if (modal.value) {
    modal.value.classList.remove('hidden')
    modal.value.classList.add('flex')
  }
  if (modalImg.value) {
    modalImg.value.src = src
  }
}

function closeModal() {
  if (modal.value) {
    modal.value.classList.add('hidden')
    modal.value.classList.remove('flex')
  }
}

// Close modal on escape key
onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  })
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
</style>