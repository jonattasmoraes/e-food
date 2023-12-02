class CardFoods {
  id: number
  title: string
  info: string
  category: string
  score: string
  description: string
  image: string
  star: string

  constructor(
    id: number,
    title: string,
    info: string,
    category: string,
    score: string,
    description: string,
    image: string,
    star: string
  ) {
    this.id = id
    this.title = title
    this.info = info
    this.category = category
    this.score = score
    this.description = description
    this.image = image
    this.star = star
  }
}

export default CardFoods
