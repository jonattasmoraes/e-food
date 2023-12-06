import { Foods } from '../../pages/Home'
import CardHome from '../Cards'
import { List, ListContainer } from './styles'

export type Props = {
  types: Foods[]
}

const CardsList = ({ types }: Props) => {
  return (
    <>
      <div className="container">
        <ListContainer>
          <List>
            {types.map((type) => (
              <li key={type.id}>
                <CardHome
                  titulo={type.titulo}
                  destacado={type.destacado}
                  tipo={type.tipo}
                  avaliacao={type.avaliacao}
                  descricao={type.descricao}
                  capa={type.capa}
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
