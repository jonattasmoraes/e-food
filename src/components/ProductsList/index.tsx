import ProductsTypes from '../../models/ProductsItem'
import Products from '../Products'
import { Title } from '../Cards/styles'
import { List, ListContainer } from './styles'

export type Props = {
  title: string
  types: ProductsTypes[]
}
const ProductsList = ({ title, types }: Props) => (
  <>
    <div className="container">
      <ListContainer>
        <Title>{title}</Title>
        <List>
          {types.map((type) => (
            <Products
              key={type.id}
              title={type.title}
              description={type.description}
              image={type.image}
            />
          ))}
        </List>
      </ListContainer>
    </div>
  </>
)

export default ProductsList
