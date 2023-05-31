<template>
  <nav class="navigation">
    <ul class="navigation-list" ref="navList">
      <li class="navigation-list-item">
        <a href="#work">Projets</a>
      </li>
      <li class="navigation-list-item">
        <a href="#about">À Propos</a>
      </li>
      <li class="navigation-list-item">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { animationOnScroll } from '@/composables/animationOnScroll'

const navList = ref(null)

onMounted(() => {
  animationOnScroll(navList.value.children, 'center 85%', 'play', 30, 0, 1, 0.2)
})
</script>

<style lang="css" scoped>
.navigation {
  position: absolute;
  left: calc(50vw - 549px);
  top: 1115px;
}

.navigation-list {
  list-style: none;
}

.navigation-list-item {
  margin: 5px 0;
}

.navigation-list-item a {
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 0.01em;
  transition: color 0.15s;
  line-height: 1.5;
}

.navigation-list-item a:hover {
  color: #f6ac9f;
}

@media (max-width: 1200px) {
  .navigation {
    left: calc(100vw - 97vw);
    top: calc(50em + 23vw);
  }
}

@media (max-width: 1024px) {
  .navigation {
    display: none;
  }
}
</style>
