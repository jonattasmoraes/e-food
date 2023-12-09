import { Link } from 'react-router-dom'

import { ProductContainer, HeaderContainer, ProductText } from './styles'
import logo from '../../assets/images/logo.svg'

const ProductHeader = () => (
  <HeaderContainer>
    <div className="container">
      <ProductContainer>
        <Link to={'/'}>
          <ProductText className="link">Restaurantes</ProductText>
        </Link>
        <img src={logo} alt="logo" />
        <ProductText>0 produto(s) no carrinho</ProductText>
      </ProductContainer>
    </div>
  </HeaderContainer>
)

export default ProductHeader
