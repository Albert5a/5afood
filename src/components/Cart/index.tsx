import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, setSidebar } from '../../store/reducers/cart'
import DeleteItem from '../../assets/images/delete.png'
import Button from '../Button'
import { formatPrice } from '../ProductModal'
import {
  CartContainer,
  Delete,
  NamePrice,
  Overlay,
  Product,
  ProductImage,
  ProductsList,
  SideBar,
  TotalValue
} from './styles'
import Checkout from '../Checkout'

export type Props = {
  sidebar: 'cart' | 'delivery' | 'payment' | 'confirm'
}

const Cart = ({ sidebar }: Props) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const totalPrice = useSelector((state: RootReducer) => state.cart.totalPrice)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  // const getTotalPrice = () => {
  //   return items.reduce((accumulator, currentValue) => {
  //     return (accumulator += currentValue.preco)
  //   }, 0)
  // }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleSidebarChange = (value: 'cart' | 'delivery' | 'payment') => {
    dispatch(setSidebar(value))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar sidebar={sidebar}>
        {sidebar === 'cart' ? (
          <>
            <ProductsList>
              {items.map((item) => (
                <Product key={item.id}>
                  <ProductImage src={item.foto} alt={item.nome} />
                  <NamePrice>
                    <h3>{item.nome}</h3>
                    <p>{formatPrice(item.preco)}</p>
                  </NamePrice>
                  <Delete
                    onClick={() => removeItem(item.id)}
                    src={DeleteItem}
                    alt="Excluir prato"
                  />
                </Product>
              ))}
            </ProductsList>
            <TotalValue>
              <p>Valor total</p>
              <p>{formatPrice(totalPrice)}</p>
            </TotalValue>
            <Button
              onClick={() => handleSidebarChange('delivery')}
              title="Comprar"
              type="button"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <Checkout />
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
