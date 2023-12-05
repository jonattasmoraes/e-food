import FoodTypes from '../../models/CardsHome'
import CardsList from '../../components/CardsList'
import italian from '../../assets/images/italy.png'
import japonese from '../../assets/images/sushi.png'
import star from '../../assets/images/star.svg'
import Header from '../../components/Header'

const menu: FoodTypes[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    category: 'Japonês',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    info: 'Destaque da semana',
    image: japonese,
    star: star
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    score: '4.8',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: '',
    image: italian,
    star: star
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    score: '4.8',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: '',
    image: italian,
    star: star
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    score: '4.8',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: '',
    image: italian,
    star: star
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    score: '4.8',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: '',
    image: italian,
    star: star
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    score: '4.8',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: '',
    image: italian,
    star: star
  }
]
const Home = () => (
  <>
    <Header />
    <CardsList types={menu} title="" />
  </>
)

export default Home
