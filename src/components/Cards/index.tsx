import Tag from '../Tag'
import {
  InfoContainer,
  Card,
  TitleContainer,
  Description,
  Info,
  Rating,
  Score,
  Title
} from './styles'
import star from '../../assets/images/star.svg'
import { ButtonLink } from '../Button/styles'

type Props = {
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const renderDestaqueTag = (destacado: boolean | undefined) => {
  if (destacado === true) {
    return <Tag>Destaques da Semana</Tag>
  }
  return null
}

const CardHome = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <Card>
    <img src={capa} alt={titulo} />
    <Info>
      {renderDestaqueTag(destacado)}
      <Tag>{tipo}</Tag>
    </Info>
    <InfoContainer>
      <TitleContainer>
        <Title>{titulo}</Title>
        <Rating>
          <Score>{avaliacao}</Score>
          <img src={star} alt="Estrela Score" />
        </Rating>
      </TitleContainer>
      <Description>{descricao}</Description>
      <ButtonLink to="/Menu" title={titulo}>
        Saiba mais
      </ButtonLink>
    </InfoContainer>
  </Card>
)

export default CardHome
