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
  | Pick<BatchHop, 'name' | 'amount' | 'alpha' | 'use' | 'time' | 'ibu'>
  | { temp?: number }

export type Misc =
  | Pick<BatchMisc, 'name' | 'amount' | 'unit' | 'use'>
  | {
      obs?: string
    }

export type Yeast = Pick<BacthYeast, 'name' | 'amount' | 'form' | 'unit'>

export type WaterProfile = {
  name: string
  calcium: number
  magnesium: number
  sodium: number
  chloride: number
  sulfate: number
  bicarbonate: number
}

export type Recipe = {
  fermentables: Fermentable[]
  hops: Hop[]
  others: Misc[]
  yeasts: Yeast[]
}
