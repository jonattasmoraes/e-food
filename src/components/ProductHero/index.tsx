import { useEffect, useState } from 'react'
import { Banner, Infos } from './styles'

import { Foods } from '../../pages/Home'

const ProductHero = () => {
  const [food, setFood] = useState<Foods>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
      .then((response) => response.json())
      .then((response) => setFood(response))
  }, [])

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
