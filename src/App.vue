<script setup>
import { ref, computed, watchEffect, onMounted, onUnmounted, markRaw, nextTick} from 'vue'
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
const componentKey = ref(0) // ✅ Force component re-render

// ✅ Track if we're currently showing project detail
const isShowingProjectDetail = ref(false)

const updateCurrentPath = () => {
  const newPath = window.location.hash || '#/'
  const wasShowingProject = isShowingProjectDetail.value
  
  // Check if we're navigating away from project detail
  const newPathParts = newPath.slice(1).split('/')
  const isNewPathProject = newPathParts[1] === 'project' && newPathParts[2]
  
  // If we were showing project detail and now we're not, force component destruction
  if (wasShowingProject && !isNewPathProject) {
    componentKey.value++ // Force component re-render
  }
  
  currentPath.value = newPath
  isShowingProjectDetail.value = isNewPathProject
}

onMounted(() => {
  window.addEventListener('hashchange', updateCurrentPath)
  // Check initial state
  const initialParts = currentPath.value.slice(1).split('/')
  isShowingProjectDetail.value = initialParts[1] === 'project' && initialParts[2]
})

onUnmounted(() => {
  window.removeEventListener('hashchange', updateCurrentPath)
})

const currentRoute = computed(() => {
  const path = currentPath.value.slice(1) // remove '#'
  const parts = path.split('/') 
  
  // Dynamic project detail route    
  if (parts[1] === 'project' && parts[2]) {
    const project = getProjectById(parts[2])
    if (project) {
      return {
        component: markRaw(ProjectDetail),
        props: project,
        title: `${project.name} | Project Detail`,
        isProjectDetail: true
      }
    }
  }
  
  // Static route
  return routes[`/${parts[1] || ''}`] || {
    component: { template: '<div class="text-center text-red-600 p-8">404 - Page Not Found</div>' },
    title: '404 | Not Found',
    isProjectDetail: false
  }
})

// 🔥 Dynamically update page title
watchEffect(() => {
  document.title = currentRoute.value.title
})

// ✅ Function to handle navbar navigation
const handleNavbarNavigation = () => {
  if (isShowingProjectDetail.value) {
    // Force component destruction when navigating away from project detail
    componentKey.value++
    isShowingProjectDetail.value = false
  }
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div :class="['sticky top-0 z-50 bg-white transition-opacity duration-300', isScrolled ? 'opacity-100' : 'opacity-100']">
      <navBar 
        :current-path="currentPath" 
        @navbar-click="handleNavbarNavigation"
      />
      <hr :class="['border-t border-gray-300', isScrolled ? 'hidden' : 'block']">
    </div>
    <main class="flex-grow">
      <!-- ✅ Use key to force component destruction -->
      <component 
        :is="currentRoute.component" 
        :key="currentRoute.isProjectDetail ? `project-${componentKey}` : `page-${componentKey}`"
        v-bind="currentRoute.props || {}" 
      />
    </main>
    <FooterD />
  </div>
</template>
