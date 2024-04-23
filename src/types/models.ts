export type AuthoringInformation = {
  brewery: string
  brewer: string
}

export type Beer = {
  name: string
  style: string
}

export type ProductionDetails = {
  goals: string
  strategies: string
  productionDate: string
  equipment: string
}

export type ProductionState =
  | 'Mostura'
  | 'Lavagem'
  | 'Fervura'
  | 'Pós-Fervura'
  | 'Primária'
  | 'Secundária'
  | 'Engarrafamento'
  | 'Dry Hop'
  | 'Aroma (HopStand)'
  | 'Primeiro Mosto'
  | 'Starter'

export type BatchFermentable = {
  name: string
  supplier: string
  type: string
  amount: number
  color: number
}

export type BatchHop = {
  name: string
  origin: string
  amount: number
  alpha: number
  use: ProductionState
  time: number
  ibu: number
  temp?: number
}

export type BacthYeast = {
  name: string
  productId: string
  laboratory: string
  amount: number
  unit: string
  attenuation: number
  form: string
}

export type BatchMisc = {
  name: string
  amount: number
  unit: string
  type: string
  use: string
}

export type BFWater = {
  name: string
  sulfate: number
  chloride: number
  bicarbonate: number
  sodium: number
  magnesium: number
  calcium: number
  ph: number
}

export type WaterAdjustments = {
  calciumCarbonate: number
  sodiumBicarbonate: number
  calciumSulfate: number
  magnesiumSulfate: number
  sodiumChloride: number
  calciumChloride: number
  calciumHydroxide: number
}

export type BFRecipe = {
  name: string
  author: string
  style: {
    name: string
    category: string
    styleGuide: string
    type: string
  }
  hops: BatchHop[]
  data: {
    mashWaterAmount: number
    mashVolume: number
    totalWater: number
  }
  water: {
    source: BFWater
    target: BFWater
    mashAdjustments: WaterAdjustments
  }
  equipment: {
    name: string
    efficiency: number
    mashEfficiency: number
  }
}

export type BFBatchScheme = {
  brewer: string
  brewDate: number
  recipe: BFRecipe
  batchHops: BatchHop[]
  batchFermentables: BatchFermentable[]
  batchYeasts: BacthYeast[]
  batchMiscs: BatchMisc[]
}

export type Fermentable = Pick<BatchFermentable, 'name' | 'amount'>

export type Hop =
  | Pick<BatchHop, 'name' | 'amount' | 'alpha' | 'use' | 'time' | 'ibu'> & {
      temp?: number
    }

export type Misc =
  | Pick<BatchMisc, 'name' | 'amount' | 'unit' | 'use'> & {
      obs?: string
    }

export type Yeast = Pick<BacthYeast, 'name' | 'amount' | 'form' | 'unit'>

export type WaterProfile = Pick<
  BFWater,
  | 'name'
  | 'calcium'
  | 'chloride'
  | 'bicarbonate'
  | 'magnesium'
  | 'sodium'
  | 'sulfate'
>

export type Recipe = {
  fermentables: Fermentable[]
  hops: Hop[]
  others: Misc[]
  yeasts: Yeast[]
  water: {
    mash: number
    sparge: number
    source: WaterProfile
    target: WaterProfile
    adjustmens: WaterAdjustments
  }
}
