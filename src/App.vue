<script setup>
import { ref, computed, watchEffect, onMounted, onUnmounted, markRaw} from 'vue'
import navBar from './components/navBar.vue'
import FooterD from './components/footer.vue'
import ProjectDetail from './components/project-detail.vue'
import Home from './page/main.vue'
import About from './page/about.vue'
import Blogs from './page/blogs.vue'
// Import the centralized data
import { projectS, getProjectById } from './data/project'

const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const routes = {
  '/': { component: markRaw(Home), title: 'Home | Grshaff Portfolio' },
  '/about': { component: markRaw(About), title: 'About | Grshaff Portfolio' },
  '/blogs': { component: markRaw(Blogs), title: 'Blogs | Grshaff Portfolio' },
  '/project': { component: markRaw({ template: '<div>Missing Project ID</div>' }), title: 'Missing ID' },
}

const currentPath = ref(window.location.hash || '#/')
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash || '#/'
})

const currentHash = ref(window.location.hash || '#/')
onMounted(() => {
  window.addEventListener('hashchange', () => {
    currentHash.value = window.location.hash || '#/'
  })
})

const currentRoute = computed(() => {
  const path = currentHash.value.slice(1) // remove '#'
  const parts = path.split('/') // Dynamic project detail route
  
  if (parts[1] === 'project' && parts[2]) {
    // Use the helper function to get project by ID
    const project = getProjectById(parts[2])
    if (project) {
      return {
        component: markRaw(ProjectDetail),
        props: project,
        title: `${project.name} | Project Detail`
      }
    }
  }
  
  // Static route
  return routes[`/${parts[1] || ''}`] || {
    component: { template: '<div class="text-center text-red-600 p-8">404 - Page Not Found</div>' },
    title: '404 | Not Found'
  }
})

// 🔥 Dynamically update page title
watchEffect(() => {
  document.title = currentRoute.value.title
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div :class="['sticky top-0 z-50 bg-white transition-opacity duration-300', isScrolled ? 'opacity-80' : 'opacity-100']">
      <navBar :current-path="currentPath" />
      <hr :class="['border-t border-gray-300', isScrolled ? 'hidden' : 'block']">
    </div>
    <main class="flex-grow">
      <component :is="currentRoute.component" v-bind="currentRoute.props || {}" />
    </main>
    <FooterD />
  </div>
</template>