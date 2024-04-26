import { date } from 'quasar'
import type {
  BFBatch,
  BacthYeast,
  BatchFermentable,
  BatchHop,
  BatchMisc,
  Beer,
  Fermentable,
  Hop,
  Misc,
  Recipe,
  Yeast,
  RDP,
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

  const recipe: Recipe = {
    beer,
    equipment: bfRecipe.equipment.name,
    fermentables: parseBacthFermentables(batchFermentables),
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
  }

  const rdp: RDP = {
    brewer: bfcontent.brewer,
    brewery: '',
    productionDate: date.formatDate(bfcontent.brewDate, 'YYYY/MM/DD'),
    recipe,
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