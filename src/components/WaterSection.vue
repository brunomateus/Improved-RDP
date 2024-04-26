<script setup lang="ts">
import { computed } from 'vue'
import { QTableColumn } from 'quasar'
import GenericSection from './GenericSection.vue'
import type { WaterAdjustments, WaterProfile } from 'src/types/models'

const brewingWater = defineModel<number>('mashingWater', { required: true })
const washingWater = defineModel<number>('spargingWater', { required: true })
const water = defineProps<{
  source: WaterProfile
  target: WaterProfile
  adjustments: WaterAdjustments
}>()

const columns: QTableColumn[] = [
  {
    name: 'Nome',
    label: 'Nome',
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Cálcio',
    label: 'Cálcio',
    field: 'calcium',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Cálcio',
    label: 'Cálcio',
    field: 'calcium',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Magnésio',
    label: 'Magnésio',
    field: 'magnesium',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Sódio',
    label: 'Sódio',
    field: 'sodium',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Cloreto',
    label: 'Cloreto',
    field: 'chloride',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Sulfeto',
    label: 'Sulfeto',
    field: 'sulfate',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Bicarbonato',
    label: 'Bicarbonato',
    field: 'bicarbonate',
    sortable: true,
    align: 'right',
  },
]

const rows = computed(() => [water.source, water.target])
</script>

<template>
  <generic-section title="💧 Água">
    <h4>Volumes</h4>
    <div class="row q-col-gutter-md">
      <q-input
        class="col-6"
        outlined
        v-model="brewingWater"
        label="Água da mostura"
      />
      <q-input
        class="col-6"
        outlined
        v-model="washingWater"
        label="Água da lavagem"
      />
      <div class="col-12">
        <q-table
          class="full-height"
          title="Perfil"
          :rows="rows"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:bottom>
            <div
              class="q-pa-md row items-start justify-evenly q-gutter-md full-width"
            >
              <q-card class="my-card">
                <q-card-section class="bg-primary text-white">
                  <div class="text-caption">Sulfato de cálcio</div>
                  <div class="text-subtitle1">CaSO<sub>4</sub></div>
                </q-card-section>
                <q-card-section>
                  {{ adjustments.calciumSulfate || 0 }}
                </q-card-section>
              </q-card>
              <q-card>
                <q-card-section class="bg-primary text-white">
                  <div class="text-caption">Cloreto de cálcio</div>
                  <div class="text-subtitle1">CaCl<sub>2</sub></div>
                </q-card-section>
                <q-card-section>
                  {{ adjustments.calciumChloride || 0 }}
                </q-card-section>
              </q-card>
              <q-card>
                <q-card-section class="bg-primary text-white">
                  <div class="text-caption">Sulfato de magnésio</div>
                  <div class="text-subtitle1">MgSO<sub>4</sub></div>
                </q-card-section>
                <q-card-section>
                  {{ adjustments.magnesiumSulfate }}
                </q-card-section>
              </q-card>
              <q-card>
                <q-card-section class="bg-primary text-white">
                  <div class="text-subtitle2">Hidróxido de Cálcio</div>
                  <div class="text-subtitle1">Ca(OH)<sub>2</sub></div>
                </q-card-section>
                <q-card-section>
                  {{ adjustments.calciumHydroxide || 0 }}
                </q-card-section>
              </q-card>
              <q-card>
                <q-card-section class="bg-primary text-white">
                  <div class="text-subtitle2">Bicarbonato de Sódio</div>
                  <div class="text-subtitle1">NaHCO<sub>3</sub></div>
                </q-card-section>
                <q-card-section>
                  {{ adjustments.sodiumBicarbonate || 0 }}
                </q-card-section>
              </q-card>
            </div>
          </template>
        </q-table>
      </div>
    </div>
  </generic-section>
</template>
