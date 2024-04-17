<template>
  <q-page class="row justify-start items-start">
    <basic-info-section
      :authoring="authoring"
      :beer="beer"
      :details="details"
    ></basic-info-section>
    <recipe-section
      :fermentables="fermentables"
      :hops="hopAditions"
      :others="others"
      :yeasts="yeast"
    ></recipe-section>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
import { ref } from 'vue'
import BasicInfoSection from 'src/components/BasicInfoSection.vue'
import RecipeSection from 'src/components/RecipeSection.vue'
import {
  AuthoringInformation,
  Beer,
  ProductionDetails,
  Fermentable,
  Hop,
  Others,
  Yeast,
} from 'src/types/models'

const authoring = ref<AuthoringInformation>({
  brewery: 'Minha cervejaria',
})

const beer = ref<Beer>({
  name: 'No vermelho',
  style: 'Red ale',
})

const details = ref<ProductionDetails>({
  goals:
    'Criar uma red ale uma clarificação impecável, fácil de beber, com alta drinkabilidade e com um tostadinho no final. O mais vermelho possível.',
  strategies: '',
  productionDate: new Date().toDateString(),
})

const fermentables: Fermentable[] = [
  {
    name: 'Agrária Pilsen',
    quantity: 6.8,
  },
  {
    name: 'Swaen Vienna',
    quantity: 1.6,
  },
  {
    name: 'Weyermann Caramunich III',
    quantity: 0.55,
  },
  {
    name: 'Roasted Barley',
    quantity: 0.12,
  },
]

const hopAditions: Hop[] = [
  {
    name: 'East Kent Goldings',
    alphaAcid: 5.7,
    quantity: 66.4,
    adition: 'Fervura',
    timeAdition: 60,
    ibu: 24,
  },
]

const others: Others[] = [
  {
    name: 'Nutriente de levedura',
    quantity: 0.5,
    adition: 'Starter',
    obs: '',
  },
  {
    name: 'Nutriente de levedura',
    quantity: 1,
    adition: 'Fermentação primária',
    obs: '',
  },
  {
    name: 'Sulfato de magnésio',
    quantity: 4,
    adition: 'Mostura',
    obs: '',
  },
  {
    name: 'Sulfato de cálcio',
    quantity: 5.3,
    adition: 'Mostura',
    obs: '',
  },
  {
    name: 'Cloreto de cálcio',
    quantity: 13.8,
    adition: 'Mostura',
    obs: '',
  },
]

const yeast: Yeast[] = [
  {
    name: 'Fermentis S-04',
    quantity: 1,
    type: 'Seca',
    dose: '',
  },
]
</script>
