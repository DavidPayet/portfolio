<template>
  <section id="work" class="work-section">
    <div class="container">
      <h3 class="work-caption caption-title underliner" ref="captionTitle">
        <span>01</span>
        <span>Projets</span>
      </h3>

      <div class="work-list">
        <article
          class="work-list-item"
          v-for="(project, index) in projects.reverse()"
          :key="index"
        >
          <div class="image-container" ref="imageContainers">
            <div class="border-lightning"></div>
            <img
              class="work-picture"
              :src="project.project_picture"
              :alt="project.title"
            />
          </div>

          <h4 class="work-list-item-title">
            <div
              class="work-title-letter"
              v-for="title in project.title"
              :key="title"
            >
              <span v-for="letter in title" :key="letter">{{ letter }}</span>
            </div>
          </h4>

          <p class="work-list-item-role" ref="role">{{ project.role }}</p>

          <RouterLink
            class="button"
            :to="{
              name: 'Project',
              params: { id: project.id },
            }"
            data-link
          >
            <span class="button-text">Voir le projet</span>
          </RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  animationOnScroll,
  underlineAnimation,
} from '@/composables/animationOnScroll'
import projects from '@/data/projects.json'

const captionTitle = ref(null)
const allWorkTitle = ref([])
const role = ref([])
const imageContainers = ref([])

const handleMouseMove = (e) => {
  imageContainers.value.forEach((container) => {
    const rect = container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    const maxDistance = Math.max(rect.width, rect.height)
    const intensity = Math.max(0, 1.5 - distance / maxDistance)

    container.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    container.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    container.style.setProperty('--intensity', intensity.toFixed(2))
  })
}

onMounted(() => {
  animationOnScroll(
    captionTitle.value.children,
    'center 90%',
    'play',
    10,
    0,
    0.5,
    0.3,
    0.6
  )

  underlineAnimation(captionTitle.value, 'center 85%')

  allWorkTitle.value = Array.from(
    document.querySelectorAll('.work-list-item-title')
  )

  allWorkTitle.value.forEach((workTitleLetterAnim) => {
    const workTitleLetters =
      workTitleLetterAnim.querySelectorAll('.work-title-letter')
    animationOnScroll(
      workTitleLetters,
      'center 70%',
      'play none none reverse',
      50,
      0,
      0.5,
      0.04
    )
  })

  role.value.forEach((role) => {
    animationOnScroll(role, 'center 85%', 'play none none reverse', 30, 0, 0.8)
  })

  if (window.matchMedia('(pointer:fine)').matches) {
    imageContainers.value = document.querySelectorAll('.image-container')
    imageContainers.value.forEach((img) => {
      animationOnScroll(img, 'center 95%', 'play none none reverse', 30, 0, 0.5)
    })
    document.addEventListener('mousemove', handleMouseMove)
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style lang="css" scoped>
.work-list {
  display: flex;
  flex-direction: column;
}

.work-list-item {
  position: relative;
  margin-bottom: 380px;
  text-align: center;
}

.image-container {
  position: absolute;
  top: 50%;
  height: calc(40vh + 2px);
  width: 400px;
  overflow: visible;
}

@media (pointer: fine) {
  .border-lightning {
    position: absolute;
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    left: -2px;
    top: -2px;
    background: radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, calc(0.8 * var(--intensity))),
      transparent 50%
    );
    opacity: var(--intensity);
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
    border-radius: 1px;
  }
}

.work-picture {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(95%) brightness(50%);
  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 2;
  border-radius: 2px;
}

.work-list-item:nth-child(odd) .image-container {
  left: 0;
}

.work-list-item:nth-child(even) .image-container {
  right: 0;
}

.work-list-item-title {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 90px;
  width: max-content;
  margin: 0 auto 40px;
  height: 99px;
  letter-spacing: -0.01em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  cursor: default;
}

.work-title-letter span {
  white-space: pre;
}

.work-list-item-role {
  position: relative;
  font-family: 'Newsreader', serif;
  font-size: 22px;
  font-style: italic;
  font-weight: lighter;
  letter-spacing: 0.05em;
  margin: 0 auto 100px;
  cursor: default;
  width: max-content;
  z-index: 9;
}

.button {
  letter-spacing: 0.15em;
  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  transform: translateZ(0);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  position: relative;
  font-weight: lighter;
  text-transform: uppercase;
  z-index: 9;
}

.button:hover {
  color: #ee8c8c;
  letter-spacing: 0.3em;
  font-weight: 400;
  transform: translateZ(0) scale(1.1);
}

.button-text:before {
  position: absolute;
  top: 25px;
  content: '';
  width: 100%;
  height: 1px;
  background: #ee8c8c;
}

@media (max-width: 1200px) {
  .container {
    padding: 0 35px;
  }
}

@media (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  .caption-title {
    margin-bottom: 95px;
  }

  .work-list-item:not(:nth-child(1)) {
    margin-top: 90px;
  }

  .image-container {
    width: calc(70vw);
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .work-list-item-title {
    font-size: 70px;
  }
}

@media (max-width: 768px) {
  .caption-title {
    width: calc(50vw - 5px);
    margin-bottom: 70px;
  }

  .caption-title.underliner:before {
    width: 100%;
  }

  .work-list-item {
    margin-top: 0;
    margin-bottom: 240px;
  }

  .work-list-item:nth-child(1) {
    margin-top: 50px;
  }

  .work-list-item-title {
    font-size: 40px;
  }
}
</style>
