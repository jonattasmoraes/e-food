import ProductHero from '../../components/ProductHero'
import ProductList from '../../components/ProductsList'
import ProductHeader from '../../components/ProductHeader'
import { useParams } from 'react-router-dom'
import { Restaurants } from '../home'
import { useEffect, useState } from 'react'

const ProductMenu = () => {
  const { id } = useParams()

  const [foods, setFoods] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => setFoods(response.cardapio))
  }, [id])

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
