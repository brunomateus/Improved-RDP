<script setup lang="ts">
import { QTableColumn } from 'quasar'
import GenericSection from './GenericSection.vue'
import type { WaterProfile } from 'src/types/models'

const brewingWater = defineModel<number>('brewingWater', { required: true })
const washingWater = defineModel<number>('washingWater', { required: true })
const water = defineProps<{
  source: WaterProfile
  target: WaterProfile
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

const rows = [water.source, water.target]
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
                  <div class="text-subtitle1">CaSO4</div>
                </q-card-section>
                <q-card-section> 5,3g </q-card-section>
              </q-card>
              <q-card>
                <q-card-section class="bg-primary text-white">
                  <div class="text-caption">Cloreto de cálcio</div>
                  <div class="text-subtitle1">CaCl2</div>
                </q-card-section>
                <q-card-section> 13,8g </q-card-section>
              </q-card>
              <q-card>
                <q-card-section class="bg-primary text-white">
                  <div class="text-caption">Sulfato de magnésio</div>
                  <div class="text-subtitle1">MgSO4</div>
                </q-card-section>
                <q-card-section>4 </q-card-section>
              </q-card>
              <q-card>
                <q-card-section class="bg-primary text-white">
                  <div class="text-subtitle2">Hidróxido de Cálcio</div>
                  <div class="text-subtitle1">Ca(OH)2</div>
                </q-card-section>
                <q-card-section> 0 </q-card-section>
              </q-card>
              <q-card>
                <q-card-section class="bg-primary text-white">
                  <div class="text-subtitle2">Bicarbonato de Sódio</div>
                  <div class="text-subtitle1">NaHCO3</div>
                </q-card-section>
                <q-card-section> 0 </q-card-section>
              </q-card>
            </div>
          </template>
        </q-table>
      </div>
    </div>
  </generic-section>
</template>
