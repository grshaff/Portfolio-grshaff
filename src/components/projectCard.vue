<template>
    <div class="grow-1 hidden"></div>
    <a href="/#" class="rounded-xl border-2 border-gray-100 bg-white w-70 mx-0 grow-10 md:grow-12 lg:grow-15 mb-5 @container">
      <article >
        <div class="flex justify-end">
          <strong
            class="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-es-xl rounded-se-xl px-3 py-1.5"
            :class="projectStatus ? 'bg-green-600 text-white' : 'bg-yellow-400 text-black'"
          >
            <svg
              v-if="projectStatus"
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <svg
              v-else
              class="size-4 text-gray-800 dark:text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span class="text-[10px] font-medium sm:text-xs">
              {{ projectStatus ? "Finished" : "On Going" }}
            </span>
          </strong>
        </div>
  
        <div class="items-start gap-4 p-4 sm:p-6 lg:p-8 @min-2xl:flex">
          <img
            alt=""
            :src="projectLogo"
            class="size-40 rounded-lg object-cover mb-3"
          />
          <div>
            <h3 class="text-lg font-medium font-roboto sm:text-lg @lg:mt-10">
              <a href="#" class="hover:underline">{{ projectName }}</a>
            </h3>
            <p class="text-sm text-gray-500 line-clamp-2">
              {{ projectDesc }}
            </p>
            <span class="hidden block" aria-hidden="true">&middot;</span>
          </div>
        </div>
      </article>
    </a>
    <div class="grow me-4 md:me-8 lg:grow-0 md:grow-0"></div>
  </template>
  
  <script setup>
  defineProps({
    projectLogo: String,
    projectName: String,
    projectDesc: String,
    projectStatus: Boolean,
    projectURL: String
  })
  </script>

