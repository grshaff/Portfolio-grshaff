<template>
    <section class="py-8 bg-white md:py-1 md:mt-8 mx-4 lg:mx-6">
    <div class="max-w-screen-xl px-4 2xl:px-0 mx-auto">
      <div class="lg:flex gap-6 ">
        <div class="grow sm:max-w-md md:max-w-xl xl:max-w-4xl w-full mx-auto lg:max-w-3xl">
          <!-- Slider -->
            <div data-hs-carousel='{
                "loadingClasses": "opacity-0"
            }' class="relative">
            <div class="hs-carousel flex flex-col md:flex-row gap-2">
                <div class=" relative grow overflow-hidden min-h-50 min-w-64 w-full lg:min-h-80 xl:min-h-100 bg-white rounded-lg ">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full bg-gray-100 p-6">
                        <span class="self-center text-4xl text-gray-800 transition duration-700">First slide</span>
                    </div>
                    </div>
                    <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full bg-gray-200 p-6">
                        <span class="self-center text-4xl text-gray-800 transition duration-700">Second awdad</span>
                    </div>
                    </div>
                    <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full bg-gray-300 p-6">
                        <span class="self-center text-4xl text-gray-800 transition duration-700">Third slide</span>
                    </div>
                    </div>
                </div>

                <button type="button" class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg">
                    <span class="text-2xl" aria-hidden="true">
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    </span>
                    <span class="sr-only">Previous</span>
                </button>
                <button type="button" class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg">
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
                    <div class="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20 hs-carousel-active:border-blue-400">
                    <div class="flex justify-center items-center text-center size-full bg-gray-100 p-2">
                        <span class="text-xs text-gray-800 transition duration-700">First slide</span>
                    </div>
                    </div>
                    <div class="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20  hs-carousel-active:border-blue-400">
                    <div class="flex justify-center items-center text-center size-full bg-gray-200 p-2">
                        <span class="text-xs text-gray-800 transition duration-700">Second slide</span>
                    </div>
                    </div>
                    <div class="hs-carousel-pagination-item shrink-0 border border-gray-200 rounded-md overflow-hidden cursor-pointer size-20  hs-carousel-active:border-blue-400">
                    <div class="flex justify-center items-center text-center size-full bg-gray-300 p-2">
                        <span class="text-xs text-gray-800 transition duration-700">Third slide</span>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
            </div>
<!-- End Slider -->
        </div>

        <div class="lg:max-w-sm mt-6 sm:mt-8 lg:mt-0 xl:min-w-sm 2xl:min-w-xl">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl"
          >
            Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
            Mac OS, Pink
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="text-2xl font-extrabold text-gray-900 sm:text-3xl"
            >
              Tech Stack:
            </p>
            <span></span>
            
          </div>

          <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <a
              href="#"
              title=""
              class="w-full grow flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-200 focus:outline-none bg-black rounded-xl border border-gray-200 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
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