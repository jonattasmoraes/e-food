import bannerImg from '../../assets/images/fundo.png'
import { Banner, Infos } from './styles'
const ProductHero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Infos>
        <p>Italiana</p>
        <h2>La Dolce Vita Trattoria</h2>
      </Infos>
    </div>
  </Banner>
)

export default ProductHero
