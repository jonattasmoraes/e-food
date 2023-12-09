import { useEffect, useState } from 'react'
import { Banner, Infos } from './styles'
import { Restaurants } from '../../pages/home'
import { useParams } from 'react-router-dom'

const ProductHero = () => {
  const { id } = useParams()
  const [food, setFood] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => setFood(response))
  }, [id])

  return (
    <Banner style={{ backgroundImage: `url(${food?.capa})` }}>
      <div className="container">
        <Infos>
          <p>{food?.tipo}</p>
          <h2>{food?.titulo}</h2>
        </Infos>
      </div>
    </Banner>
  )
}

export default ProductHero
