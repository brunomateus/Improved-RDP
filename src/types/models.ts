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

export type Recipe = {
  fermentables: Fermentable[]
  hops: Hop[]
}
