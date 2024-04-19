<script setup lang="ts">
import GenericSection from './GenericSection.vue'
import { AuthoringInformation, Beer, ProductionDetails } from 'src/types/models'

const authoring = defineModel<AuthoringInformation>('authoring', {
  required: true,
})
const beer = defineModel<Beer>('beer', {
  required: true,
})

const details = defineModel<ProductionDetails>('details', {
  required: true,
})
</script>

<template>
  <generic-section title="Informações básicas">
    <div class="row q-col-gutter-md">
      <q-input
        class="col-12"
        outlined
        v-model="authoring.brewery"
        label="Nome da cervejaria"
      />
      <q-input
        class="col-8"
        outlined
        v-model="beer.name"
        label="Nome da cerveja"
      />
      <q-input
        outlined
        v-model="details.productionDate"
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
              <q-date v-model="details.productionDate">
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
        v-model="details.goals"
        label="Objetivos da cerveja"
      />

      <q-input
        class="col-12"
        type="textarea"
        outlined
        v-model="details.strategies"
        label="Estratégias para alcançar os objetivos"
      />
    </div>
  </generic-section>
</template>
