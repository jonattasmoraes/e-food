import { Link } from 'react-router-dom'
import headerImage from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'
import { Image, Title } from './styles'

const Header = () => (
  <Image style={{ backgroundImage: `url(${headerImage})` }}>
    <div>
      <Link to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
    <Title>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Title>
  </Image>
)

export default Header
