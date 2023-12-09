import { useEffect, useState } from 'react'
import { Restaurants } from '../../../../pages/home'
import CardHome from '../Cards'
import { List, ListContainer } from './styles'

const CardsList = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((response) => setRestaurants(response))
  }, [])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <div className="container">
        <ListContainer>
          <List>
            {restaurants.map((type) => (
              <li key={type.id}>
                <CardHome
                  titulo={type.titulo}
                  destacado={type.destacado}
                  tipo={type.tipo}
                  avaliacao={type.avaliacao}
                  descricao={type.descricao}
                  capa={type.capa}
                  Restaurants={type}
                />
              </li>
            ))}
          </List>
        </ListContainer>
      </div>
    </>
  )
}

export default CardsList
