export type AuthoringInformation = {
  brewery: string
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

export type Fermentable = {
  name: string
  quantity: number
}

export type Hop = {
  name: string
  quantity: number
  alphaAcid: number
  adition: string
  timeAdition: number
  ibu: number
  temperature?: number
}

export type Others = {
  name: string
  quantity: number
  adition: string
  obs: string
}

export type Yeast = {
  name: string
  quantity: number
  type: 'Seca' | 'Líquida'
  dose: string
}

export type Recipe = {
  fermentables: Fermentable[]
  hops: Hop[]
  others: Others[]
  yeasts: Yeast[]
}
