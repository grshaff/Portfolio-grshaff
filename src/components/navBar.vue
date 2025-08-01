<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 xl:text-[20px]" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#/" class="-m-1.5 p-1.5" @click="handleNavClick">
          <span class="sr-only">Your Company</span>           
          <p class="font-roboto font-semibold ">{{logo}}</p>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12" :class="{ 'nav-hovered': isNavHovered }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <a
          href="#/"
          @click="handleNavClick"
          :class="['py-px px-2 text-sm/6 font-roboto font-light text-gray-900 hover-underline-animation xl:text-[16px]', isActiveRoute('/') ? 'static-underline' : '']"
        >Projects</a>
        <a 
          href="#/about"
          @click="handleNavClick"
          :class="['py-px px-2 text-sm/6 font-roboto font-light text-gray-900 hover-underline-animation xl:text-[16px]', isActiveRoute('/about') ? 'static-underline' : '']"
        >About</a>
        <a 
          href="#/blogs"
          @click="handleNavClick"
          :class="['py-px px-2 text-sm/6 font-roboto font-light text-gray-900 hover-underline-animation xl:text-[16px]', isActiveRoute('/blogs') ? 'static-underline' : '']"
        >Blogs</a>
      </PopoverGroup>
      <div class="lg:flex-1 lg:justify-end lg:mx-3 xl:mx-8 hidden lg:flex font-light opacity-60 hover:opacity-100 ">
        <a :href="mailtoLink" class="flex font-roboto xl:text-[16px]" target="_blank" rel="noopener noreferrer">
          Work 
          <svg xmlns="http://www.w3.org/2000/svg " fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6 my-auto ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <p class="visible md:visible font-semibold font-roboto">Menu</p>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 -mt-2 md:-mt-2 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="flow-root text-center md:mt-6">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6 md:py-0 ">
              <a 
                href="#/"
                @click="handleMobileNavClick"
                :class="['-mx-3 block rounded-lg px-3 py-2 text-base/7 font-roboto font-light text-gray-900  hover-underline-animation', isActiveRoute('/') ? 'static-underline' : '']"
              >Projects</a>
              <a 
                href="#/about" 
                @click="handleMobileNavClick"
                :class="['-mx-3 block rounded-lg px-3 py-2 text-base/7 font-roboto font-light text-gray-900  hover-underline-animation', isActiveRoute('/about') ? 'static-underline' : '']"
              >About</a>
              <a 
                href="#/blogs" 
                @click="handleMobileNavClick"
                :class="['-mx-3 block rounded-lg px-3 py-2 text-base/7 font-roboto font-light text-gray-900  hover-underline-animation pb-4', isActiveRoute('/blogs') ? 'static-underline' : '']"
              >Blogs</a>
            </div>
            <div class="py-6">
              <a :href="mailtoLink" class="justify-center flex font-light hover:opacity-80" target="_blank" rel="noopener noreferrer">
                <p class="font-roboto xl:text-[16px]">Work</p>
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const logo = "</grshaff>"
const mobileMenuOpen = ref(false)

const props = defineProps({
  currentPath: String
})

const emit = defineEmits(['navbar-click'])

const isNavHovered = ref(false)
const handleMouseEnter = () => {
  isNavHovered.value = true
}
const handleMouseLeave = () => {
  isNavHovered.value = false
}

// ✅ Handle navbar clicks
const handleNavClick = () => {
  emit('navbar-click')
}

const handleMobileNavClick = () => {
  mobileMenuOpen.value = false
  emit('navbar-click')
}

const isActiveRoute = computed(() => {
  return (route) => {
    if (!props.currentPath) return false
    
    const currentRoute = props.currentPath.slice(1)
    const parts = currentRoute.split('/')
    
    if (route === '/' && (currentRoute === '' || currentRoute === '/')) {
      return true
    }
    
    if (route !== '/' && parts[1] === route.slice(1)) {
      return true
    }
    
    return false
  }
})

const email = 'gshaffaat@gmail.com'
const subject = 'Collaboration Opportunity with Giri Shaffaat'
const body = `Hi Giri,

I came across your work and I'm interested in collaborating with you on a project. I'd love to discuss how we can work together.

Looking forward to your response.`

const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  width: 100%;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 30%;
  width: 40%;
  height: 3px;
  opacity: 40%;
  background-color: black;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.dark .hover-underline-animation::after {
  background-color: white;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

.static-underline {
  font-weight: 500 !important;
}

.static-underline::after {
  transform: scaleX(1);
  opacity: 100%;
}

@media screen and (min-width: 1024px) {
  .hover-underline-animation {
    width: 100%;
    height: 28px;
  }
  
  .hover-underline-animation::after {
    height: 2px;
    left: 0;
    width: 100%;
  }
}
</style>
