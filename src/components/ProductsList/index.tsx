import Products from '../Product'
import { List, ListContainer } from './styles'

import { Restaurants } from '../../../../pages/home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsList = () => {
  const { id } = useParams()

  const [foods, setFoods] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => setFoods(response))
  }, [id])

  if (!foods) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <div className="container">
        <ListContainer>
          <List>
            {foods?.cardapio.map((food) => (
              <li key={food.id}>
                <Products
                  foto={food.foto}
                  preco={food.preco}
                  nome={food.nome}
                  descricao={food.descricao}
                  porcao={food.porcao}
                />
              </li>
            ))}
          </List>
        </ListContainer>
      </div>
    </>
  )
}

export default ProductsList
