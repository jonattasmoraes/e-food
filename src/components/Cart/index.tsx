import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import { CartContainer, CartItem, Overlay, Prices, SideBar } from './styles'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../Product'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.preco
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <span>{formatPrice(getTotalPrice())}</span>
        </Prices>
        <Button
          type={'button'}
          title={'Clique aqui para continuar com a compra'}
          to={''}
        >
          <>Continuar com a entrega</>
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
