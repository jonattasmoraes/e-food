import CardsList from '../../components/CardsList'
import Header from '../../components/Header'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

export type MenuItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  return (
    <>
      <Header />
      <CardsList />
    </>
  )
}

export default Home
