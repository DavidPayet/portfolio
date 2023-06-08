<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h3 class="contact-caption caption-title underliner" ref="captionTitle">
        <span>02</span>
        <span>Contact</span>
      </h3>

      <div class="contact-content">
        <span>Travaillons</span>
        <span>ensemble</span>
      </div>

      <p class="contact-email">
        <img src="/assets/arrow-bottom-right.svg" alt="arrow-bottom-right" />
        <a :href="connectionContentToSplit[2].link">david@contact</a>
      </p>

      <div class="summary connection">
        <h4 class="summary-title connection" ref="summaryTitleConnetion">
          <span class="summary-letter" v-for="letter in summaryTitleToSplit">
            {{ letter }}
          </span>
        </h4>
        <div class="summary-title-underline" ref="underline"></div>

        <ul class="summary-content connection" ref="summaryContentConnection">
          <li v-for="item in connectionContentToSplit">
            <a :href="item.link" target="_blank" class="summary-letter">
              {{ item.name }}
            </a>
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

const summaryTitleToSplit = 'Connexion'
summaryTitleToSplit.split('')

const connectionContentToSplit = [
  { name: 'GitHub', link: 'https://github.com/DavidPayet' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/david-payet/' },
  { name: 'Email', link: 'mailto:davidpayet570@gmail.com' },
]

const captionTitle = ref(null)
const summaryTitleConnetion = ref(null)
const summaryContentConnection = ref(null)
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

  animationOnScroll(
    summaryTitleConnetion.value,
    'center 90%',
    'play',
    25,
    0,
    0.8,
    0,
    0.5
  )
  animationOnScroll(
    summaryContentConnection.value.children,
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
    'center 95%',
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
.contact-content {
  font-family: Helvetica, Arial, sans-serif;
  max-width: 350px;
  margin: 0 auto 130px;
  line-height: 1;
  font-size: clamp(2.5rem, 1.875rem + 3.125vw, 5.625rem);
  font-weight: 400;
  letter-spacing: -0.0275em;
}

.contact-content span {
  display: block;
}

.contact-email {
  margin-bottom: 110px;
  padding-top: 65px;
  position: relative;
  text-align: right;
}

.contact-email a {
  font-weight: lighter;
  transition: color 0.15s;
}

.contact-email a:hover {
  color: #f6ac9f;
}

.contact-email img {
  position: absolute;
  width: 30px;
  right: 235px;
  top: -5px;
}

.summary-title.connection .summary-letter:hover {
  color: #f6ac9f;
  transform: scale(1.4) translateY(-1.5px);
  font-weight: 400;
}

.summary-content.connection a {
  transition: color 0.15s, letter-spacing 0.5s;
}

.summary-content.connection a:hover {
  color: #f6ac9f;
  letter-spacing: 0.3em;
  transition: letter-spacing 0.5s cubic-bezier(0.19, 1, 0.22, 1);
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

  .summary-title-underline {
    margin-bottom: 20px;
  }

  .contact-content {
    margin-left: 0;
    margin-bottom: 30px;
  }

  .contact-email img {
    right: 200px;
    width: 18px;
  }
}
</style>
