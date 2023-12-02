import CardFoods from '../../models/CardsHome'
import Restaurant from '../Cards'
import { Title } from '../Cards/styles'
import { List, ListContainer } from './styles'

export type Props = {
  title: string
  types: CardFoods[]
}
const CardsList = ({ title, types }: Props) => (
  <>
    <div className="container">
      <ListContainer>
        <Title>{title}</Title>
        <List>
          {types.map((type) => (
            <Restaurant
              key={type.id}
              title={type.title}
              category={type.category}
              score={type.score}
              description={type.description}
              info={type.info}
              image={type.image}
            />
          ))}
        </List>
      </ListContainer>
    </div>
  </>
)

export default CardsList
