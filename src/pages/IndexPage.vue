<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
import { ref } from 'vue'
import BasicInfoSection from 'src/components/BasicInfoSection.vue'
import RecipeSection from 'src/components/RecipeSection.vue'
import WaterSection from 'src/components/WaterSection.vue'
import {
  AuthoringInformation,
  Beer,
  ProductionDetails,
  Fermentable,
  Hop,
  Misc,
  Yeast,
  WaterProfile,
  BFBatchScheme,
  BatchFermentable,
  BatchHop,
  BacthYeast,
  BatchMisc,
} from 'src/types/models'

const upload = ref(false)

const uploadBatch = ref<File | null>(null)

function loadContent() {
  if (uploadBatch.value) {
    const reader = new FileReader()
    console.log(uploadBatch.value)
    reader.onload = (e) => {
      if (e.target && e.target.result != null) {
        parseBatch(JSON.parse(e.target.result as string))
        upload.value = false
      }
    }
    reader.readAsText(uploadBatch.value)
  }
}

function parseBatch(content: BFBatchScheme) {
  const { recipe, batchFermentables, batchYeasts, batchMiscs } = content

  authoring.value.brewer = content.brewer
  authoring.value.brewery = ''

  beer.value.name = recipe.name
  beer.value.style = recipe.style.name

  fermentables.value = parseBacthFermentables(batchFermentables)
  hopAditions.value = parseBatchHops(recipe.hops)
  yeasts.value = parseBatchYeast(batchYeasts)
  others.value = parseBatchMisc(batchMiscs)
}

function parseBacthFermentables(
  batchFermentables: BatchFermentable[]
): Fermentable[] {
  return batchFermentables.map((f) => {
    const { name, amount } = f
    return { name, amount }
  })
}

function parseBatchHops(batchHops: BatchHop[]): Hop[] {
  return batchHops.map((h) => {
    const { name, amount, alpha, use, time, temp, ibu } = h
    return { name, amount, alpha, use, time, temp, ibu }
  })
}

function parseBatchYeast(batchYeast: BacthYeast[]): Yeast[] {
  return batchYeast.map((y) => {
    const { name, amount, form, unit } = y
    return { name, amount, form, unit }
  })
}

function parseBatchMisc(batchMisc: BatchMisc[]): Misc[] {
  return batchMisc.map((m) => {
    const { name, amount, use, unit } = m
    return { name, amount, use, unit }
  })
}

const authoring = ref<AuthoringInformation>({} as AuthoringInformation)
const beer = ref<Beer>({} as Beer)

const details = ref<ProductionDetails>({
  goals: '',
  strategies: '',
  productionDate: new Date().toDateString(),
})

const fermentables = ref<Fermentable[]>([])
const hopAditions = ref<Hop[]>([])
const others = ref<Misc[]>([])
const yeasts = ref<Yeast[]>([])

const sourceWater: WaterProfile = {
  name: 'Olympia',
  calcium: 2,
  magnesium: 3,
  sodium: 13,
  chloride: 17,
  sulfate: 6,
  bicarbonate: 21,
}

const targetWater: WaterProfile = {
  name: 'IRA',
  calcium: 120,
  magnesium: 10,
  sodium: 0,
  chloride: 140,
  sulfate: 90,
  bicarbonate: 20,
}
</script>

<template>
  <q-page class="row justify-start items-start q-pa-md">
    <basic-info-section
      :authoring="authoring"
      :beer="beer"
      :details="details"
    ></basic-info-section>
    <recipe-section
      :fermentables="fermentables"
      :hops="hopAditions"
      :others="others"
      :yeasts="yeasts"
    ></recipe-section>
    <water-section
      :brewing-water="10"
      :washing-water="10"
      :source="sourceWater"
      :target="targetWater"
    ></water-section>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="keyboard_arrow_up" direction="up" color="primary">
        <q-fab-action
          external-label
          label-position="left"
          label="Importar do BrewFather"
          color="primary"
          icon="receipt_long"
          @click="upload = true"
        />
        <q-fab-action
          external-label
          label-position="left"
          label="Compartilhar"
          color="primary"
          icon="share"
        />
      </q-fab>
    </q-page-sticky>

    <q-dialog v-model="upload">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">
            <q-icon name="sports_bar" /> Importe a seu lote do BrewFather
          </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-file
            filled
            bottom-slots
            accept="application/JSON"
            label="Arquivo do Batch"
            v-model="uploadBatch"
            @update:model-value="loadContent"
          >
            <template v-slot:prepend>
              <q-icon name="upload_file" @click.stop.prevent />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="uploadBatch = null"
                class="cursor-pointer"
              />
            </template>

            <template v-slot:hint> JSON proveniente Brewfather </template>
          </q-file>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
