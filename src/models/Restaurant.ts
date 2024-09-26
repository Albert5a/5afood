class Restaurants {
  title: string
  description: string
  image: string
  valuation: string
  infos: string[]
  id: number

  constructor(
    title: string,
    description: string,
    image: string,
    valuation: string,
    infos: string[],
    id: number
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.valuation = valuation
    this.infos = infos
    this.id = id
  }
}

export default Restaurants;
