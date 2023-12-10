import { Banner, Infos } from './styles'

import { useGetRestaurantsBannerQuery } from '../../services/api'

const ProductHero = () => {
  const { data: food, isLoading } = useGetRestaurantsBannerQuery()

  if (isLoading) {
    return <h3>Carregando...</h3>
  }

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
