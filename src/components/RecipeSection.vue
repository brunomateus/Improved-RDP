<script setup lang="ts">
import { QTableColumn } from 'quasar'
import GenericSection from './GenericSection.vue'
import type { Recipe, Fermentable, Hop, Yeast, Misc } from '../types/models'
const { fermentables, hops, yeasts, others } =
  defineProps<Pick<Recipe, 'fermentables' | 'hops' | 'yeasts' | 'others'>>()

const totalFermentables = fermentables.reduce(
  (acc: number, current: Fermentable) => acc + current.amount,
  0
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
    field: 'amount',
    label: 'Quantidade',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Percentage',
    field: (fermentable: Fermentable) =>
      `${((fermentable.amount / totalFermentables) * 100).toFixed(2)}%`,
    label: '%',
    sortable: true,
    align: 'right',
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
    field: 'amount',
    label: 'Quantidade (g)',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Alpha ácido',
    field: 'alpha',
    label: 'AA(%)',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Etapa de adição',
    label: 'Etapa de adição',
    field: 'use',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Tempo da adição',
    field: 'time',
    label: 'Tempo da adição',
    sortable: true,
    align: 'right',
  },
  {
    name: 'Temperatura de adição',
    field: (hop: Hop) =>
      hop.temp ? hop.temp : hop.use == 'Fervura' ? 100 : '',
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

const othersCols: QTableColumn[] = [
  {
    name: 'Nome',
    label: 'Nome',
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Quatidade',
    label: 'Quantidade',
    sortable: true,
    field: (misc: Misc) => `${misc.amount} ${misc.unit}`,
    align: 'right',
  },
  {
    name: 'Etapa de adição',
    label: 'Etapa de adição',
    field: 'use',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Observação',
    field: 'obs',
    label: 'Observação',
    sortable: true,
    align: 'right',
  },
]

const yeastCols: QTableColumn[] = [
  {
    name: 'Nome',
    label: 'Nome',
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Quatidade',
    label: 'Quantidade',
    field: (yeast: Yeast) => `${yeast.amount} ${yeast.unit}`,
    sortable: true,
    align: 'right',
  },
  {
    name: 'Tipo',
    label: 'Tipo',
    field: 'form',
    sortable: true,
    align: 'left',
  },
]
</script>

<template>
  <generic-section title="Receita">
    <div class="row items-stretch q-col-gutter-md">
      <div class="col-6">
        <q-table
          class="full-height"
          title="🌾 Fermentáveis"
          :rows="fermentables"
          :columns="fermentablesCols"
          row-key="name"
        />
      </div>
      <div class="col-6">
        <q-table
          class="full-height"
          title="🌳 Lupulagem"
          :rows="hops"
          :columns="hopAditionsCols"
          row-key="name"
        />
      </div>

      <div class="col-6">
        <q-table
          class="full-height"
          title="🔢 Diversos"
          :rows="others"
          :columns="othersCols"
          row-key="name"
        />
      </div>
      <div class="col-6">
        <q-table
          class="full-height"
          title="🧪Levedura"
          :rows="yeasts"
          :columns="yeastCols"
          row-key="name"
        />
      </div>
    </div>
  </generic-section>
</template>
