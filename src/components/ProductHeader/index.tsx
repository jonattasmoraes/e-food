import { Link } from 'react-router-dom'

import { ProductContainer, HeaderContainer, ProductText } from './styles'
import logo from '../../assets/images/logo.svg'

const ProductHeader = () => (
  <HeaderContainer>
    <div className="container">
      <ProductContainer>
        <ProductText>Restaurantes</ProductText>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <ProductText>0 produto(s) no carrinho</ProductText>
      </ProductContainer>
    </div>
  </HeaderContainer>
)

export default ProductHeader
