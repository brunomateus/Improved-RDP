<script setup lang="ts">
import { computed } from 'vue'
import { QTableColumn } from 'quasar'
import type { Recipe, Fermentable, Hop } from '../types/models'
const { fermentables, hops } = defineProps<Recipe>()

const totalFermentable = computed(() =>
  fermentables.reduce(
    (acc: number, current: Fermentable) => acc + current.quantity,
    0
  )
)

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
    label: 'AA(%)',
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
    name: 'Temperatura de adição',
    field: (hop: Hop) =>
      hop.temperature ? hop.temperature : hop.adition == 'Fervura' ? 100 : '',
    label: 'Temperatura de adição',
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
]

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
</script>

<template>
  <section class="col-12">
    <h2>Receita</h2>
    <div class="row items-stretch q-col-gutter-md">
      <div class="col-5">
        <q-table
          title="🌾 Fermentáveis"
          :rows="fermentables"
          :columns="fermentablesCols"
          row-key="name"
        />
      </div>
      <div class="col-7">
        <q-table
          class="full-height"
          title="🌳 Lupulagem"
          :rows="hops"
          :columns="hopAditionsCols"
          row-key="name"
        />
      </div>
    </div>
  </section>
</template>
