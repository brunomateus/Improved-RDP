import { date } from 'quasar'
import {
  type BFBatch,
  type BacthYeast,
  type BatchFermentable,
  type BatchHop,
  type BatchMisc,
  type Beer,
  type Fermentable,
  type Hop,
  type Misc,
  type Recipe,
  type Yeast,
  type RDP,
  MashStep,
} from 'src/types/models'

export function useParseBatch(bfcontent: BFBatch): RDP {
  const {
    recipe: bfRecipe,
    batchFermentables,
    batchYeasts,
    batchMiscs,
  } = bfcontent

  const beer: Beer = {
    name: bfRecipe.name,
    style: bfRecipe.style.name,
    goals: '',
  }

  const fermentables = parseBacthFermentables(batchFermentables)

  const recipe: Recipe = {
    beer,
    equipment: Object.assign(bfRecipe.equipment, {
      waterGrainRatio: Number(
        (
          bfRecipe.data.mashWaterAmount /
          fermentables.reduce((acc, current) => acc + current.amount, 0)
        ).toFixed(2)
      ),
    }),
    fermentables,
    hops: parseBatchHops(bfRecipe.hops),
    yeasts: parseBatchYeast(batchYeasts),
    others: parseBatchMisc(batchMiscs),
    water: {
      mash: bfRecipe.data.mashWaterAmount,
      sparge: bfRecipe.data.mashVolume,
      source: bfRecipe.water.source,
      target: bfRecipe.water.target,
      adjustmens: bfRecipe.water.mashAdjustments,
    },
    strategies: '',
    mash: bfRecipe.mash.steps.map<MashStep>((s) => ({
      name: s.name,
      temperature: s.stepTemp,
      duration: s.stepTime,
    })),
  }

  const rdp: RDP = {
    brewer: bfcontent.brewer,
    brewery: '',
    productionDate: date.formatDate(bfcontent.brewDate, 'YYYY/MM/DD'),
    recipe,
    mash: {
      measurements: {
        predictions: {
          ph: recipe.water.source.ph,
          waterTemperature: bfRecipe.equipment.ambientTemperature,
        },
        measured: {
          ph: bfcontent.measuredMashPh,
          adjustedPh: 0,
          heatingRate: 0,
        },
      },
    },
  }

  return rdp
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
