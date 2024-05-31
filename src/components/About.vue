<template>
  <section id="about" class="about-section">
    <div class="container">
      <h3 class="about-caption caption-title underliner" ref="captionTitle">
        <span>02</span>
        <span>À Propos</span>
      </h3>

      <h3 class="about-subtitle" ref="aboutSubtitle">
        De militaire
        <br />
        à développeur
      </h3>

      <div class="about-content" ref="aboutContent">
        <p>
          Après 10 années d’expérience militaire, ma curiosité et mon inlassable
          envie d’apprendre me mènent au métier de développeur informatique.
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
          Mon attrait pour le domaine persiste et entretient mon envie de relever
          de nouveaux défis.
        </p>
      </div>

      <div class="summary">
        <h4 class="summary-title" ref="summaryTitle">
          <span class="summary-letter" v-for="letter in summaryTitleToSplit">
            {{ letter }}
          </span>
        </h4>
        <div class="summary-title-underline" ref="underline"></div>
        <ul class="summary-content" ref="summaryContent">
          <li v-for="item in summaryContentToSplit">
            <span class="summary-letter" v-for="letter in item">
              {{ letter }}
            </span>
          </li>
        </ul>
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

const summaryTitleToSplit = 'Compétences'
summaryTitleToSplit.split('')

const summaryContentToSplit = ['JavaScript', 'Vue JS', 'React JS']
summaryContentToSplit.forEach((item) => {
  item.split('')
})

const captionTitle = ref(null)
const aboutSubtitle = ref(null)
const aboutContent = ref(null)
const summaryTitle = ref(null)
const summaryContent = ref(null)
const underline = ref(null)

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
  animationOnScroll(aboutSubtitle.value, 'center 85%', 'play', 30, 0, 1, 0.4)
  animationOnScroll(
    aboutContent.value.children,
    'center 85%',
    'play',
    30,
    0,
    1,
    0.4
  )
  animationOnScroll(
    summaryTitle.value,
    'center 85%',
    'play',
    25,
    0,
    0.8,
    0,
    0.5
  )
  animationOnScroll(
    summaryContent.value.children,
    'center 85%',
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
.about-section {
  margin-bottom: 140px;
}

.about-caption {
  margin-right: auto;
}

.about-subtitle {
  font-family: Helvetica, Arial, sans-serif;
  font-size: clamp(2rem, 1.6rem + 2vw, 4rem);
  margin: 0 0 65px 360px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.0275em;
}

.about-content {
  display: flex;
  justify-content: space-between;
  margin: 0 0 140px 360px;
  font-weight: lighter;
  line-height: 1.5;
}

.about-content p {
  width: calc(50% - 30px);
  margin-bottom: 30px;
  letter-spacing: 0.01em;
}

.about-section .summary-letter:hover {
  color: #f6ac9f;
  transform: scale(1.4) translateY(-1.5px);
  font-weight: 400;
}

@media (max-width: 1200px) {
  .container {
    padding: 0 35px;
  }

  .about-subtitle,
  .about-content {
    margin-left: calc(100vw - 840px);
  }
}

@media (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  .about-caption {
    margin-bottom: 140px;
  }

  .about-subtitle {
    margin: 0 0 45px;
  }

  .about-content {
    margin: 0 0 100px;
  }

  .summary {
    margin: 0 0 90px;
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

  .about-content {
    display: block;
    margin: 0 0 80px;
  }

  .about-content p {
    width: 100%;
  }

  .summary-title-underline {
    margin-bottom: 20px;
  }
}
</style>
