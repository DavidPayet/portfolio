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
          v-for="(project, index) in projects"
          :key="index"
        >
          <RouterLink
            :to="{
              name: 'Project',
              params: { id: project.id },
            }"
            data-link
            class="work-list-item-inner"
          >
            <img
              class="work-picture"
              :src="project.project_picture"
              :alt="project.title"
              ref="workPicture"
            />
          </RouterLink>

          <h4 class="work-list-item-title">
            <RouterLink
              :to="{
                name: 'Project',
                params: { id: project.id },
              }"
              data-link
              :data-title="project.title"
              ref="allWorkTitle"
            >
              <div
                class="work-title-letter"
                v-for="title in project.title"
                :key="title"
              >
                <span v-for="letter in title" :key="letter">{{ letter }}</span>
              </div>
            </RouterLink>
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
import { ref, onMounted } from 'vue'
import {
  animationOnScroll,
  underlineAnimation,
} from '@/composables/animationOnScroll'
import projects from '@/data/projects.json'

const captionTitle = ref(null)
const allWorkTitle = ref([])
const workPicture = ref([])
const role = ref([])

onMounted(() => {
  const articles = document.querySelectorAll('.work-list-item')
  const titleToHover = document.querySelectorAll('.work-list-item-title')

  articles.forEach((article, i) => {
    titleToHover[i].addEventListener('mouseover', () => {
      workPicture.value[i].style.filter =
        'sepia(80%) brightness(50%) hue-rotate(290deg)'
      workPicture.value[i].style.transform = 'scale(.98)'
    })

    titleToHover[i].addEventListener('mouseleave', () => {
      workPicture.value[i].style.filter = ''
      workPicture.value[i].style.transform = ''
    })
  })

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
    document.querySelectorAll('.work-list-item-title a')
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

  workPicture.value = document.querySelectorAll('.work-picture')

  workPicture.value.forEach((pic) => {
    animationOnScroll(pic, 'center 95%', 'play none none reverse', 30, 0, 0.5)
  })
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

.work-list-item:nth-child(4n + 1) .work-picture {
  left: 0;
}

.work-list-item:nth-child(even) .work-picture {
  margin: 0 auto;
  left: 0;
  right: 0;
}

.work-list-item:nth-child(4n + 3) .work-picture {
  right: 0;
}

.work-picture {
  position: absolute;
  top: 50%;
  filter: sepia(95%) brightness(50%);
  height: 40vh;
  border-radius: 5px;
  object-fit: cover;
  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  border-radius: 50%;
}

.work-picture:hover {
  border-radius: 0;
  transform: scale(0.98) !important;
  filter: sepia(80%) brightness(50%) hue-rotate(290deg);
}

.work-list-item-title {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 90px;
  width: max-content;
  margin: 0 auto 40px;
  height: 99px;
  letter-spacing: -0.01em;
}

.work-list-item-title a {
  display: flex;
  justify-content: center;
  flex-direction: row;
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
  font-weight: 400;
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
    font-size: calc(1vw + 0.5em);
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

  .work-list-item-title {
    font-size: 40px;
  }

  .work-picture {
    width: calc(70vw);
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
