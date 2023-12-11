import ProductList from '../../containers/ProductsList'
import ProductHeader from '../../components/ProductHeader'

import { useGetMenuQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import ProductBanner from '../../components/ProductBanner'

const ProductMenu = () => {
  const { id } = useParams()

  const { data: foods } = useGetMenuQuery(id!)

  if (!foods) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProductHeader />
      <ProductBanner
        capa={foods.capa}
        tipo={foods.tipo}
        titulo={foods.titulo}
      />
      <ProductList />
    </>
  )
}

export default ProductMenu
