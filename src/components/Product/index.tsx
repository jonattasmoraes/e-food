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
import modalImg from '../../assets/images/image_modal.png'
import closeImg from '../../assets/images/close.png'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
}

const Products = ({ title, description, image }: Props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          type={'button'}
          title={''}
          to={'/teste'}
          onClick={() => setShowModal(true)}
        >
          Adicionar ao carrinho
        </Button>
      </Card>
      <ModalOverlay
        className={showModal ? 'visible' : ''}
        onClick={() => setShowModal(false)}
      >
        <ModalContainer>
          <ModalImage src={modalImg} />
          <ModalContent>
            <h2>Pizza Marguerita</h2>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <span>Serve: de 2 a 3 pessoas</span>
            <Button type={'button'} title={''} to={'/teste'}>
              Adicionar ao carrinho - R$ 60,90
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
