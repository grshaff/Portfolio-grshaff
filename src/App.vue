<script setup>
import { ref, computed } from 'vue'
import navBar from './components/navBar.vue'
import FooterD from './components/footer.vue'
import Home from './page/main.vue'
import About from './page/about.vue'
import Blogs from './page/blogs.vue'
import NavBar from './components/navBar.vue'
// import NotFound from './NotFound.vue'

const routes = {
  '/': Home,
  '/about': About,
  '/blogs': Blogs
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
    <div class="flex flex-col min-h-screen">
    <navBar :current-path="currentPath" />
    <main class="flex-grow">
      <component :is="currentView" />
    </main>
    <FooterD />
  </div>
</template>
