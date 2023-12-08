import { useEffect, useState } from 'react'
import CardsList from '../../components/CardsList'
import Header from '../../components/Header'

type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const [menu, setMenu] = useState<Foods[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((response) => setMenu(response))
  }, [])

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <CardsList types={menu} />
    </>
  )
}

export default Home
