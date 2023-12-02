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
  title: string
  category: string
  score: string
  description: string
  info: string
  image: string
}

const CardHome = ({
  title,
  category,
  score,
  description,
  info,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Info>
      {info.length > 0 && <Tag>{info}</Tag>}
      <Tag>{category}</Tag>
    </Info>
    <InfoContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Rating>
          <Score>{score}</Score>
          <img src={star} alt="Estrela Score" />
        </Rating>
      </TitleContainer>
      <Description>{description}</Description>
      <ButtonLink to="/teste" title={title}>
        Saiba mais
      </ButtonLink>
    </InfoContainer>
  </Card>
)

export default CardHome
