import { Banner, Infos } from './styles'

import { Restaurants } from '../../pages/Home'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const ProductHero = ({ capa, tipo, titulo }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <Infos>
          <p>{tipo}</p>
          <h2>{titulo}</h2>
        </Infos>
      </div>
    </Banner>
  )
}

export default ProductHero
