import { useDispatch } from 'react-redux'
import {
  Card,
  CloseButton,
  Description,
  ModalContainer,
  ModalContent,
  ModalImage,
  ModalOverlay,
  Title
} from './styles'
import Button from '../Button'
import closeImg from '../../assets/images/close.png'
import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'
import { MenuItem, Restaurants } from '../../pages/Home'

type Props = {
  restaurant: MenuItem
  restaurants: Restaurants
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getDescription = (description: string) => {
  if (description.length > 240) {
    return description.slice(0, 240) + '...'
  }
}

const Products = ({ restaurant, restaurants }: Props) => {
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(restaurant))
    dispatch(open())
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card>
        <img src={restaurant.foto} />
        <Title>{restaurant.nome}</Title>
        <Description>{getDescription(restaurant.descricao)}</Description>
        <Button
          to=""
          type={'button'}
          title={''}
          onClick={() => setShowModal(true)}
        >
          <>Adicionar ao carrinho</>
        </Button>
      </Card>
      <ModalOverlay
        className={showModal ? 'visible' : ''}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowModal(false)
          }
        }}
      >
        <ModalContainer>
          <ModalImage src={restaurant.foto} />
          <ModalContent>
            <h2>{restaurant.nome}</h2>
            <p>{restaurant.descricao}</p>
            <span>{restaurant.porcao}</span>
            <Button
              type={'button'}
              title={''}
              to={'/teste'}
              onClick={() => {
                addCart()
                setShowModal(false)
              }}
            >
              <>Adicionar ao carrinho - {formatPrice(restaurant.preco)}</>
            </Button>
          </ModalContent>
          <CloseButton>
            <img src={closeImg} onClick={() => setShowModal(false)} />
          </CloseButton>
        </ModalContainer>
      </ModalOverlay>
    </>
  )
}

export default Products
