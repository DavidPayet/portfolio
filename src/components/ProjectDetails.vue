<template>
  <div id="project">
    <header class="project-hero">
      <div class="project-hero-inner">
        <h2 class="project-hero-title">
          <span v-for="letter in findProject.title.split('')" :key="letter">{{
            letter
          }}</span>
        </h2>

        <p class="project-hero-role" ref="role">{{ findProject.role }}</p>

        <a
          class="button"
          :href="findProject.project_link"
          target="_blank"
          data-link
        >
          <span class="button-text">Voir le site</span>
        </a>
      </div>

      <figure class="project-image">
        <img :src="findProject.project_picture_xl" :alt="findProject.title" />
      </figure>
    </header>

    <div class="project-container">
      <section class="project-section">
        <h3 class="project-caption caption-title underliner" ref="captionTitle">
          <span>Le Projet</span>
        </h3>

        <div class="project-content" ref="projectContent">
          <p>
            Après 10 années d’expérience militaire, ma curiosité et mon
            inlassable envie d’apprendre me mènent au métier de développeur
            informatique.
            <br />
            C’est avec enthousiasme que j'y accorde du temps, avec la volonté de
            me former continuellement, principalement de manière autonome.
          </p>
          <p>
            Afin de justifier mes connaissances, je détiens une certification de
            niveau 5 reconnu au Répertoire National des Certifications
            Professionnelles en tant que Développeur Intégrateur Web ainsi q’une
            première expérience professionnelle de 2 mois.
            <br />
            Mon attrait pour le domaine persiste et entretien mon envie de
            relever de nouveaux défis.
          </p>
        </div>
      </section>

      <div class="summary-project">
        <h4 class="summary-title project" ref="summaryTitleConnetion">
          <span class="summary-letter" v-for="letter in summaryTitleToSplit">
            {{ letter }}
          </span>
        </h4>
        <div class="summary-title-underline" ref="underline"></div>

        <ul class="summary-content project" ref="summaryContentConnection">
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
import projects from '@/data/projects.json'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

console.log(route)
console.log(router)

const findProject = projects.find((p) => p.id === parseInt(route.params.id))

const summaryTitleToSplit = 'Menu'
summaryTitleToSplit.split('')

const menuItemToSplit = [
  { name: 'Projet Suivant', link: '#' },
  { name: 'Contact', link: 'mailto:davidpayet570@gmail.com' },
  { name: 'Retour', link: 'javascript: history.back()' },
]
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
  white-space: pre;
}

.project-hero-role {
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
  margin-bottom: 140px;
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
</style>
