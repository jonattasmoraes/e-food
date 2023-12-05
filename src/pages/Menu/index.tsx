import ProductHero from '../../components/ProductHero'
import ProductsTypes from '../../models/ProductsItem'
import pizza from '../../assets/images/pizza.png'
import ProductList from '../../components/ProductsList'
import ProductHeader from '../../components/ProductHeader'
const menuItens: ProductsTypes[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  }
]
const ProductMenu = () => (
  <>
    <ProductHeader />
    <ProductHero />
    <ProductList types={menuItens} title="" />
  </>
)

export default ProductMenu
