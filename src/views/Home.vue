<template>
  <div>
    <Navigation />
    <Hero />
    <Work />
    <About />
    <Contact />
  </div>
</template>

<script setup>
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Hero from '@/components/Hero.vue'
import Navigation from '@/components/Navigation.vue'
import Work from '@/components/Work.vue'
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  const savedPosition = sessionStorage.getItem('scrollPosition')

  if (savedPosition) {
    nextTick(() => {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: 'instant',
        })
        sessionStorage.removeItem('scrollPosition')
      }, 0)
    })
  }
})
</script>

<style scoped></style>
