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
    <Button type={'button'} title={''} to={'/teste'}>
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default Products
