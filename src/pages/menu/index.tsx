import ProductHero from '../../components/ProductHero'
import ProductList from '../../components/ProductsList'
import ProductHeader from '../../components/ProductHeader'

import { useGetMenuQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

const ProductMenu = () => {
  const { id } = useParams()

  const { data: foods } = useGetMenuQuery(id!)

  if (!foods) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProductHeader />
      <ProductHero />
      <ProductList />
    </>
  )
}

export default ProductMenu
