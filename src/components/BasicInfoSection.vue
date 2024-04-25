<script setup lang="ts">
import GenericSection from './GenericSection.vue'
import { Beer } from 'src/types/models'

const brewer = defineModel<string>('brewer', {
  required: true,
})

const brewery = defineModel<string>('brewery', {
  required: true,
})

const beer = defineModel<Beer>('beer', {
  required: true,
})

const equipment = defineModel<string>('equipment', {
  required: true,
})

const strategies = defineModel<string>('strategies', {
  required: true,
})

const productionDate = defineModel<string>('mashDate', {
  required: true,
})
</script>

<template>
  <generic-section title="Informações básicas">
    <div class="row q-col-gutter-md">
      <q-input
        class="col-6"
        outlined
        v-model="brewery"
        label="Nome da cervejaria"
      />
      <q-input
        class="col-6"
        outlined
        v-model="brewer"
        label="Nome do cervejeiro"
      />
      <q-input
        class="col-6"
        outlined
        v-model="beer.name"
        label="Nome da cerveja"
      />

      <q-input class="col-3" outlined v-model="equipment" label="Equipamento" />

      <q-input
        outlined
        v-model="productionDate"
        label="Data de produção"
        mask="date"
        class="col-3"
        :rules="['date']"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="productionDate">
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
        v-model="beer.goals"
        label="Objetivos da cerveja"
      />

      <q-input
        class="col-12"
        type="textarea"
        outlined
        v-model="strategies"
        label="Estratégias para alcançar os objetivos"
      />
    </div>
  </generic-section>
</template>
