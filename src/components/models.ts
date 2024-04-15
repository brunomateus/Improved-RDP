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
