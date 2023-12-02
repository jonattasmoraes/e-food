import { Card, Description, Title } from './styles'
import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
}

const Products = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button
      variant="secundary"
      to="/product"
      type={'button'}
      title={'Clique para adicionar ao carrinho'}
      children={'Adicionar ao carrinho'}
    />
  </Card>
)

export default Products
