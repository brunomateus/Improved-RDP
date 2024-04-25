<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
import { computed, ref } from 'vue'
import { date } from 'quasar'
import { useParseBatch } from 'src/composables/useParserBF'
import BasicInfoSection from 'src/components/BasicInfoSection.vue'
import RecipeSection from 'src/components/RecipeSection.vue'
import WaterSection from 'src/components/WaterSection.vue'
import { RDP } from 'src/types/models'

const upload = ref(false)

const uploadBatch = ref<File | null>(null)

function loadContent() {
  if (uploadBatch.value) {
    const reader = new FileReader()
    console.log(uploadBatch.value)
    reader.onload = (e) => {
      if (e.target && e.target.result != null) {
        rdp.value = useParseBatch(JSON.parse(e.target.result as string))
        upload.value = false
      }
    }
    reader.readAsText(uploadBatch.value)
  }
}

const rdp = ref<RDP>({
  brewer: '',
  brewery: '',
  productionDate: date.formatDate(Date.now(), 'YYYY-MM-DD'),
  recipe: {
    beer: {
      name: '',
      style: '',
      goals: '',
    },
    equipment: '',
    strategies: '',
    fermentables: [],
    hops: [],
    yeasts: [],
    others: [],
    water: {
      mash: 0,
      sparge: 0,
      source: {
        calcium: 0,
        bicarbonate: 0,
        chloride: 0,
        magnesium: 0,
        name: '',
        sodium: 0,
        sulfate: 0,
      },
      target: {
        calcium: 0,
        bicarbonate: 0,
        chloride: 0,
        magnesium: 0,
        name: '',
        sodium: 0,
        sulfate: 0,
      },
      adjustmens: {
        calciumCarbonate: 0,
        calciumChloride: 0,
        calciumHydroxide: 0,
        calciumSulfate: 0,
        magnesiumSulfate: 0,
        sodiumBicarbonate: 0,
        sodiumChloride: 0,
      },
    },
  },
})

const fermentables = computed(() => rdp.value.recipe.fermentables)
const hopAditions = computed(() => rdp.value.recipe.hops)
const others = computed(() => rdp.value.recipe.others)
const yeasts = computed(() => rdp.value.recipe.yeasts)
const mashWater = computed(() => rdp.value.recipe.water.mash)
const spargeWater = computed(() => rdp.value.recipe.water.sparge)
const sourceWater = computed(() => rdp.value.recipe.water.source)
const targetWater = computed(() => rdp.value.recipe.water.target)
const waterAdjustemts = computed(() => rdp.value.recipe.water.adjustmens)
</script>

<template>
  <q-page class="row justify-start items-start q-pa-md">
    <basic-info-section
      :beer="rdp.recipe.beer"
      :brewer="rdp.brewer"
      :brewery="rdp.brewery"
      :equipment="rdp.recipe.equipment"
      :mash-date="rdp.productionDate"
      :strategies="rdp.recipe.strategies"
    ></basic-info-section>
    <recipe-section
      :fermentables="fermentables"
      :hops="hopAditions"
      :others="others"
      :yeasts="yeasts"
    ></recipe-section>
    <water-section
      :mashing-water="mashWater"
      :sparging-water="spargeWater"
      :source="sourceWater"
      :target="targetWater"
      :adjustments="waterAdjustemts"
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
