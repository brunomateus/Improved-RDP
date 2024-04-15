<template>
  <q-page class="row justify-start items-start">
    <section class="col-12">
      <h2>Informações básicas</h2>
      <q-input
        class="col-12"
        outlined
        v-model="breweryName"
        label="Nome da cervejaria"
      />
      <q-input
        class="col-8"
        outlined
        v-model="beerName"
        label="Nome da cerveja"
      />
      <q-input
        outlined
        v-model="brewDate"
        label="Data de produção"
        mask="date"
        class="col-4"
        :rules="['date']"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="brewDate">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input
        class="col-12"
        type="textarea"
        outlined
        v-model="beerGoals"
        label="Objetivos da cerveja"
      />

      <q-input
        class="col-12"
        type="textarea"
        outlined
        v-model="beerStrategies"
        label="Estratégias para alcançar os objetivos"
      />
    </section>

    <section class="col-12">
      <h2>Receita</h2>
      <div class="row">
        <div class="q-pa-md col-4">
          <q-table
            title="🌾 Fermentáveis"
            :rows="fermentables"
            :columns="fermentablesCols"
            row-key="name"
          />
        </div>
        <div class="q-pa-md col-8">
          <q-table
            title="🌳 Lupulagem"
            :rows="hopAditions"
            :columns="hopAditionsCols"
            row-key="name"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
import { ref, computed } from 'vue'
import { Fermentable, Hop } from 'components/models'
import { QTableColumn } from 'quasar'
const breweryName = ref('')
const beerName = ref('')
const brewDate = ref('')
const beerGoals = ref('')
const beerStrategies = ref('')

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

const totalFermentable = computed(() =>
  fermentables.reduce(
    (acc: number, current: Fermentable) => acc + current.quantity,
    0
  )
)

const fermentablesCols: QTableColumn[] = [
  {
    name: 'Nome',
    label: 'Nome',
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Quatidade',
    field: 'quantity',
    label: 'Quantidade',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Percentage',
    field: (fermentable: Fermentable) =>
      `${((fermentable.quantity / totalFermentable.value) * 100).toFixed(2)}%`,
    label: '%',
    sortable: true,
    align: 'right',
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

const hopAditionsCols: QTableColumn[] = [
  {
    name: 'Nome',
    label: 'Nome',
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Quatidade',
    field: 'quantity',
    label: 'Quantidade (g)',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Alpha ácido',
    field: 'alphaAcid',
    label: 'Alpha ácido (%)',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Etapa de adição',
    label: 'Etapa de adição',
    field: 'adition',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Tempo da adição',
    field: 'timeAdition',
    label: 'Tempo da adição',
    sortable: true,
    align: 'right',
  },
  {
    name: 'IBU',
    field: 'ibu',
    label: 'IBU',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Temperatura de adição',
    field: (hop: Hop) =>
      hop.temperature ? hop.temperature : hop.adition == 'Fervura' ? 100 : '',
    label: 'Temperatura de adição',
    sortable: true,
    align: 'right',
  },
]
</script>
