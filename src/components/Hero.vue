<template>
  <header class="hero-section">
    <img src="/assets/logo_gold1.svg" alt="logo_dp" class="logo" />
    <div class="container">
      <h1 class="hero-title" ref="title">
        <div
          class="hero-title-part"
          ref="titlePart"
          v-for="part in heroTitleToSplit"
        >
          <div class="letter-anim" v-for="letter in part">
            <span :data-letter="letter">{{ letter }}</span>
          </div>
        </div>
      </h1>

      <h2 class="hero-subtitle" ref="subtitle">
        Développeur fullstack,
        <br />
        Investi et passionné
        <br />
        à Bordeaux, France.
      </h2>

      <h3 class="hero-caption underliner" ref="heroCaption">
        <span>David Payet</span>
      </h3>

      <div class="hero-content" ref="heroContent">
        <p>
          Bienvenue sur mon portfolio !
          <br />
          Je suis un développeur fullstack passionné, dédié à la création
          d'applications web simples et fonctionnelles qui répondent aux besoins
          des utilisateurs.
          <br />
          Je propose des solutions pratiques pour résoudre des problèmes
          quotidiens.
        </p>
        <p>
          Je vous invite à explorer mes projets, où chaque réalisation reflète
          mon désir d'apprendre et d'améliorer continuellement mes compétences.
          <br />
          N'hésitez pas à me contacter si vous souhaitez échanger des idées ou
          discuter de collaborations potentielles.
        </p>
      </div>

      <div class="hero-lines" ref="heroLines">
        <div class="hero-line">
          <div></div>
        </div>
        <div class="hero-line">
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import {
  animationOnScroll,
  underlineAnimation,
} from '@/composables/animationOnScroll'

const heroTitleToSplit = ['Développeur', 'Web']

heroTitleToSplit.forEach((heroTitle) => {
  heroTitle.split('')
})

const titlePart = ref(null)
const title = ref(null)
const heroLines = ref(null)
const subtitle = ref(null)
const heroCaption = ref(null)
const heroContent = ref(null)

onMounted(() => {
  const tlHero = gsap.timeline()

  tlHero
    .from(title.value.children[0].children, {
      delay: 0.5,
      x: -10,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power4.out',
    })
    .from(
      title.value.children[1].children,
      {
        x: 10,
        y: -10,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
      },
      '-=1'
    )
    .from(heroLines.value.children, { width: 0 }, '-=.5')

  animationOnScroll(subtitle.value, 'center 95%', 'play', 30, 0, 0.5)
  animationOnScroll(heroCaption.value, 'center 85%', 'play', 30, 0, 1)
  animationOnScroll(
    heroContent.value.children,
    'center 85%',
    'play',
    30,
    0,
    1,
    0.4
  )
  underlineAnimation(heroCaption.value, 'center 85%')
})
</script>

<style lang="css" scoped>
.hero-section {
  margin-bottom: 310px;
  padding-top: 190px;
}

.logo {
  position: absolute;
  top: 0;
  width: 40px;
  margin: 40px;
}

.hero-title {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 190px;
  font-weight: 600;
  letter-spacing: -0.02em;
  -webkit-user-select: none;
  user-select: none;
  margin: 0 auto 200px;
  width: max-content;
  line-height: 1.05;
}

.hero-title-part span {
  position: relative;
}

.letter-anim,
.letter-anim span {
  display: inline-block;
}

.letter-anim span:before,
.letter-anim span:after {
  position: absolute;
  content: attr(data-letter);
  inset: 0;
}

.letter-anim span:before {
  color: #fd1057;
}

.letter-anim span:hover:after {
  transform: rotate(-5deg);
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  background: linear-gradient(45deg, #ee8c8c 19%, #f9ffa5, var(--primaryColor));
  -webkit-background-clip: text;
  background-clip: text;
  filter: drop-shadow(0 0 20px #fd1057);
  color: transparent;
}

.hero-title-part:last-child {
  margin-left: 1.04em;
  margin-top: -60px;
  padding-top: 20px;
}

.hero-subtitle {
  font-weight: 400;
  letter-spacing: -0.0275em;
  line-height: 1.1;
  font-size: clamp(
    1.125rem,
    0.5096153846153846rem + 3.076923076923077vw,
    3.125rem
  );
  width: max-content;
  margin: 0 auto 50px;
}

.hero-caption {
  letter-spacing: 0.01em;
  font-weight: lighter;
  height: 60px;
  margin: 0 0 95px;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-bottom: 10px;
}

.hero-content {
  font-weight: lighter;
  display: flex;
  justify-content: space-between;
  margin-left: 360px;
  line-height: 1.5;
}

.hero-content p {
  width: calc(50% - 30px);
  letter-spacing: 0.01em;
}

.hero-lines {
  box-sizing: inherit;
}

.hero-line {
  height: 1px;
  position: absolute;
  top: 0;
  transform: rotate(60deg);
  transform-origin: 0 0;
  z-index: -1;
}

.hero-line div {
  height: 100%;
  width: 100%;
}

.hero-line:first-child {
  width: 500px;
  left: calc(50% + 300px);
}

.hero-line:last-child {
  width: 1000px;
  top: 250px;
  left: calc(50% + 300px);
}

.hero-line:first-child div {
  background: linear-gradient(90deg, #f6ac9f, #0f0d0d);
}

.hero-line:nth-child(2) div {
  background: linear-gradient(90deg, var(--primaryColor), #0f0d0d);
}

@media (max-width: 1200px) {
  .container {
    padding: 0 35px;
  }

  .hero-title {
    font-size: calc(17vw - 15px);
  }

  .hero-content {
    margin-left: calc(100vw - 840px);
  }

  .hero-title-part:last-child {
    margin-top: -55px;
  }
}

@media (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  .hero-section {
    margin-bottom: 310px;
    padding-top: 190px;
  }

  .hero-title {
    margin-bottom: 100px;
    order: 1;
  }

  .hero-subtitle {
    order: 3;
    margin-left: 0;
  }

  .hero-caption {
    order: 2;
  }

  .hero-content {
    order: 4;
    display: flex;
    justify-content: space-between;
    margin-left: 0;
  }

  .hero-line:first-child {
    left: calc(50% + 250px);
  }
}

@media (max-width: 842px) {
  .hero-content {
    flex-direction: column;
    gap: 40px;
    margin: 0 auto 50px;
  }

  .hero-content p {
    width: 100%;
  }

  .hero-lines {
    display: none;
  }

  .hero-title-part:last-child {
    margin-top: -50px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    margin-bottom: 120px;
    padding-top: 215px;
  }

  .hero-caption {
    margin-bottom: 70px;
  }

  .hero-caption.underliner:before {
    width: 50%;
  }

  .hero-title-part:last-child {
    margin-top: -40px;
  }
}

@media (max-width: 580px) {
  .hero-title-part:last-child {
    margin-top: -30px;
  }
}
</style>
