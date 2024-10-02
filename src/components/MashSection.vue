<script setup lang="ts">
import { QTableColumn } from 'quasar'

import GenericSection from './GenericSection.vue'
import { MashStep } from 'src/types/models'
import MashChart from 'src/components/MashChart.vue'

const mashWater = defineModel<number>('waterVolume', {
  required: true,
})

const waterGrainRatio = defineModel<number>('waterGrainRatio', {
  required: true,
})

const heatingRate = defineModel<number>('heatingRate', {
  required: false,
})

const grainAbsorptionRate = defineModel<number>('grainAbsorptionRate', {
  required: true,
})

const temperature = defineModel<number>('waterTemperature', {
  required: false,
})

const predictedPh = defineModel<number>('predictedPh', {
  required: false,
})

const measuredPh = defineModel<number>('measuredPh', {
  required: false,
})

const adjustedPh = defineModel<number>('adjustedPh', {
  required: false,
})

const acid = defineModel<number>('acid', {
  required: false,
})

const steps = defineModel<MashStep[]>('steps', {
  required: true,
})

const stepsCols: QTableColumn[] = [
  {
    name: 'Nome',
    label: 'Nome',
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Temperatura',
    label: 'Temperatura',
    field: 'temperature',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Duration',
    field: 'duration',
    label: 'Tempo',
    sortable: true,
    align: 'right',
  },
]
</script>

<template>
  <generic-section title="🍯 Mostura">
    <div class="row items-stretch q-col-gutter-md">
      <q-input
        class="col-6"
        outlined
        v-model="mashWater"
        label="Volume da água de mostura"
      />
      <q-input
        class="col-6"
        outlined
        v-model="temperature"
        label="Temperatura da água de mostura"
      />
      <q-input
        class="col-4"
        outlined
        v-model="predictedPh"
        label="pH previsto do mosto"
      />
      <q-input
        class="col-4"
        outlined
        v-model="measuredPh"
        label="pH real do mosto"
      />
      <q-input
        class="col-4"
        outlined
        v-model="adjustedPh"
        label="ph de mostura (ajustado)"
      />
      <q-input class="col-3" outlined v-model="acid" label="Acido adicionado" />
      <q-input
        class="col-3"
        outlined
        v-model="heatingRate"
        label="Taxa de aquecimento"
      />
      <q-input
        class="col-3"
        outlined
        v-model="waterGrainRatio"
        label="Razão água/malte"
      />

      <q-input
        class="col-3"
        outlined
        v-model="grainAbsorptionRate"
        label="Taxa de absorção dos grãos (L/Kg)"
      />
    </div>
    <h4>Perfil de mostura</h4>
    <div class="row items-stretch q-col-gutter-md">
      <div class="col-6">
        <q-table
          class="full-height"
          :rows="steps"
          :columns="stepsCols"
          row-key="name"
        />
      </div>
      <div class="col-6">
        <mash-chart :steps="steps" />
      </div>
    </div>
  </generic-section>
</template>
