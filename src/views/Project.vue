<template>
  <div id="project">
    <header class="project-hero">
      <div class="project-hero-inner">
        <h2 class="project-hero-title">
          <span
            v-for="letter in findProject.title.split('')"
            :key="letter"
            ref="projectTitle"
            >{{ letter }}</span
          >
        </h2>

        <p class="project-hero-role" ref="role">{{ findProject.role }}</p>

        <a
          v-if="findProject.project_link"
          class="button"
          :href="findProject.project_link"
          target="_blank"
          data-link
          ref="projectLink"
        >
          <span class="button-text" ref="projectLink">Voir le site</span>
          <span class="underline-link" ref="underlineLink"></span>
        </a>
      </div>

      <figure class="project-image">
        <img
          :src="findProject.project_picture_xl"
          :alt="findProject.title"
          ref="projectImg"
          rel="preload"
          :preloadImg="preloadImg"
        />
      </figure>
    </header>

    <div class="project-container">
      <section class="project-section">
        <h3 class="project-caption caption-title underliner" ref="captionTitle">
          <span>Projet {{ findProject.project_type }}</span>
        </h3>

        <div class="project-content" ref="projectContent">
          <p>{{ findProject.description1 }}</p>
          <p>{{ findProject.description2 }}</p>
        </div>
        <a
          v-if="findProject.source_code"
          class="button source-code"
          :href="findProject.source_code"
          target="_blank"
          data-link
        >
          <span class="button-text">Code Source</span>
          <span class="underline-link"></span>
        </a>
      </section>

      <div class="summary-project">
        <h4 class="summary-title project" ref="summaryMenuTitle">
          <span class="summary-letter" v-for="letter in summaryTitleToSplit">
            {{ letter }}
          </span>
        </h4>
        <div class="summary-title-underline" ref="underline"></div>

        <ul class="summary-content project" ref="summaryMenuContent">
          <li v-for="item in menuItemToSplit">
            <a :href="item.link" class="summary-letter">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import projects from '@/data/projects.json'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import {
  animationOnScroll,
  underlineAnimation,
} from '@/composables/animationOnScroll'

const route = useRoute()

const findProject = projects.find((p) => p.id === parseInt(route.params.id))

const summaryTitleToSplit = 'Menu'
summaryTitleToSplit.split('')

let nextProject = parseInt(route.params.id)

if (nextProject < projects.length) {
  nextProject += 1
} else {
  nextProject = 1
}

const menuItemToSplit = [
  { name: 'Projet Suivant', link: `/project/${nextProject}` },
  { name: 'Contact', link: 'mailto:davidpayet570@gmail.com' },
  { name: 'Retour', link: `/` },
]

const projectTitle = ref([])
const role = ref(null)
const projectLink = ref(null)
const underlineLink = ref(null)
const projectImg = ref(null)
const captionTitle = ref(null)
const projectContent = ref(null)
const summaryMenuTitle = ref(null)
const summaryMenuContent = ref(null)
const underline = ref(null)

const preloadImg = (url) => {
  projects.forEach((project) => {
    const img = new Image()
    img.src = url
    console.log(project.project_picture_xl)
  })
}

onMounted(() => {
  preloadImg(project.project_picture_xl)

  const tlProjectHero = gsap.timeline()

  tlProjectHero
    .from(projectImg.value, {
      scale: 1.2,
      opacity: 0,
      duration: 2,
      ease: 'power4.out',
    })
    .from(
      projectTitle.value,
      {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
      },
      '-=1.5'
    )
    .from(
      role.value,
      {
        y: 10,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=1'
    )
    .from(
      projectLink.value,
      {
        y: 15,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=.8'
    )
    .to(
      underlineLink.value,
      {
        '--projectLinkUnderlineScaleX': 1,
        duration: 0.5,
        ease: 'power4.out',
      },
      '-=.8'
    )

  animationOnScroll(
    captionTitle.value.children,
    'center 100%',
    'play',
    10,
    0,
    0.5,
    0,
    0
  )

  underlineAnimation(captionTitle.value, 'center 95%')

  animationOnScroll(
    projectContent.value.children,
    'center 85%',
    'play',
    25,
    0,
    0.8,
    0.2,
    0.5
  )

  animationOnScroll(
    summaryMenuTitle.value,
    'center 90%',
    'play',
    25,
    0,
    0.8,
    0,
    0.5
  )
  animationOnScroll(
    summaryMenuContent.value.children,
    'center 95%',
    'play',
    25,
    0,
    0.8,
    0.2,
    0.5
  )
  animationOnScroll(
    underline.value,
    'center 85%',
    'play none none reverse',
    0,
    1,
    0.4,
    0,
    0,
    0,
    'left'
  )
})
</script>

<style lang="css" scoped>
.project-hero {
  height: 100vh;
}

.project-hero-inner {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 1;
}

.project-hero-title {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 90px;
  margin-bottom: 20px;
  letter-spacing: -0.01em;
}

.project-hero-title span {
  display: inline-block;
  white-space: pre;
}

.project-hero-role {
  font-family: 'Newsreader', serif;
  font-size: 22px;
  font-style: italic;
  font-weight: lighter;
  letter-spacing: 0.05em;
  margin: 0 auto 100px;
  cursor: default;
  width: max-content;
}

.button {
  letter-spacing: 0.15em;
  transition: color 0.15s, letter-spacing 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  font-weight: lighter;
  text-transform: uppercase;
}

.button:hover {
  color: #ee8c8c;
  letter-spacing: 0.3em;
}

.underline-link {
  position: absolute;
  display: block;
  top: 25px;
  left: 0;
  content: '';
  width: 100%;
  height: 1px;
  background: #ee8c8c;
  transform: var(--projectLinkUnderlineScaleX);
  transition: transform 0.3s ease;
}

.project-image img {
  height: 100%;
  left: 0;
  margin: 0;
  opacity: 0.45;
  position: absolute;
  top: 0;
  width: 100%;
  filter: sepia(95%) brightness(100%);
  object-fit: cover;
}

.project-image:before {
  background: linear-gradient(
    180deg,
    hsla(0, 7%, 5%, 0) 0,
    hsla(0, 7%, 5%, 0.013) 8.1%,
    hsla(0, 7%, 5%, 0.049) 15.5%,
    hsla(0, 7%, 5%, 0.104) 22.5%,
    hsla(0, 7%, 5%, 0.175) 29%,
    hsla(0, 7%, 5%, 0.259) 35.3%,
    hsla(0, 7%, 5%, 0.352) 41.2%,
    hsla(0, 7%, 5%, 0.45) 47.1%,
    hsla(0, 7%, 5%, 0.55) 52.9%,
    hsla(0, 7%, 5%, 0.648) 58.8%,
    hsla(0, 7%, 5%, 0.741) 64.7%,
    hsla(0, 7%, 5%, 0.825) 71%,
    hsla(0, 7%, 5%, 0.896) 77.5%,
    hsla(0, 7%, 5%, 0.951) 84.5%,
    hsla(0, 7%, 5%, 0.987) 91.9%,
    #0f0d0d
  );
  bottom: -1px;
  content: '';
  height: 300px;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
}

.project-container {
  margin: 0 60px 40px;
}

.project-section {
  margin-bottom: 240px;
}

.project-caption {
  margin-right: auto;
  margin-bottom: 85px;
}

.project-content {
  display: flex;
  justify-content: space-between;
  margin: 0 0 85px 360px;
  font-size: 20px;
  font-weight: lighter;
  line-height: 1.5;
}

.project-content p {
  width: calc(50% - 30px);
  margin-bottom: 30px;
  letter-spacing: 0.01em;
}

.button.source-code {
  width: max-content;
  font-size: 16px;
  display: block;
  margin-right: 40px;
  float: right;
}

.summary-project {
  margin: 0 0 40px;
}

.summary-title.project .summary-letter:hover {
  color: #f6ac9f;
  transform: scale(1.4) translateY(-1.5px);
  font-weight: 400;
}

.summary-content.project a {
  transition: color 0.15s, letter-spacing 0.5s;
}

.summary-content.project a:hover {
  color: #f6ac9f;
  letter-spacing: 0.3em;
  transition: letter-spacing 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

@media (max-width: 1200px) {
  .project-content {
    margin-left: calc(100vw - 840px);
  }
}

@media (max-width: 1024px) {
  .project-content {
    font-size: calc(1vw + 0.5em);
    margin: 0 0 100px;
  }
}

@media (max-width: 768px) {
  .project-hero-title {
    font-size: calc(13vw - 10px);
  }

  .caption-title,
  .project-content {
    font-size: 16px;
  }

  .caption-title.underliner:before {
    width: calc(20vw + 8em);
  }
  .project-content {
    display: block;
    margin: 0 0 80px;
  }

  .project-content p {
    width: 100%;
  }
}
</style>
