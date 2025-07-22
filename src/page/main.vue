<template>
  <div class="h-50 justify-center content-center bg-cover bg-no-repeat bg-center md:h-55 lg:h-60" :style="{ backgroundImage: `url(${bgurl})`}">
    <div class="flex items-center gap-4 justify-center m-4">
      <img
        alt=""
        src="../assets/profile.webp"
        class="size-30 md:size-35 lg:size-40 object-cover animate-rotate-border max-w-sm transition-all duration-500 ease-out transform-3d rounded-lg cursor-pointer hover:scale-[1.03] bg-conic/[from_var(--border-angle)] to-black from-80% via-90% to-100% p-[2px]"/>
      <div>
        <h3 class="font-medium text-gray-900 text-lg md:text-[24px] lg:text-[30px] font-roboto">Software Engineer</h3>
        <p class="mt-0.5 text-gray-700 text-[12px] md:text-[18px] lg:text-[20px] font-roboto">
          Hey, I'm Giri Shaffaat. <br>I design & develop apps to make my life easier.
        </p>
      </div>
    </div>
  </div>
  
  <span class="flex items-center my-3">
    <span class="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
    <span class="shrink-0 px-4 text-gray-900 font-roboto font-medium text-lg">Showcase</span>
    <span class="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
  </span>
  
  <carouselShowcase/>
  
  <span class="flex items-center mt-3">
    <span class="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
    <span class="shrink-0 px-4 text-gray-900">&#8203;</span>
    <span class="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
  </span>
  
  <div class="h-auto justify-center bg-cover bg-no-repeat bg-center ms-5 mb-8 md:ms-10 xl:ms-15">
    <div class="my-1 mb-3">
      <h1 class="font-roboto font-medium text-gray-900 text-lg md:text-[24px] lg:text-[30px]">Projects</h1>
      <h2 class="mt-0.5 text-gray-700 text-[12px] md:text-[18px] lg:text-[20px] font-roboto">Recent projects I've worked on</h2>
    </div>
    <div class="flex flex-wrap mx-auto me-4 md:me-8 gap-5 xl:me-14">
      <projectCard
        v-for="(project, index) in projects"
        :key="index"
        :projectId="project.id"
        :projectName="project.name"
        :projectDesc="project.desc"
        :projectStatus="project.status"
      />
    </div>
  </div>
</template>

<script setup>
import bgurl from '../assets/profile-bg.webp'
import projectCard from '../components/projectCard.vue'
import carouselShowcase from '../components/carouselShow.vue'
// Import the centralized data
import { projects } from '../data/project'
</script>