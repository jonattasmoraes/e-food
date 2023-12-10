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

type Props = {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
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

const Products = ({ foto, preco, nome, descricao, porcao }: Props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card>
        <img src={foto} />
        <Title>{nome}</Title>
        <Description>{getDescription(descricao)}</Description>
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
          <ModalImage src={foto} />
          <ModalContent>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <span>{porcao}</span>
            <Button type={'button'} title={''} to={'/teste'}>
              <>Adicionar ao carrinho - {formatPrice(preco)}</>
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
