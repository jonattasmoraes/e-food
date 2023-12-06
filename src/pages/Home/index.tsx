import { useEffect, useState } from 'react'
import CardsList from '../../components/CardsList'
import Header from '../../components/Header'

export type Foods = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [menu, setMenu] = useState<Foods[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((response) => setMenu(response))
  }, [])

  return (
    <>
      <Header />
      <CardsList types={menu} />
    </>
  )
}

export default Home
.
