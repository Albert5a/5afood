import React from 'react'
import Button from '../Button'
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
import DeleteItem from '../../assets/images/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

// acessível a partir da página do restaurante.

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ProductsList>
          {items.map((item) => (
            <Product key={item.id}>
              <ProductImage src={item.foto} alt={item.nome} />
              <NamePrice>
                <h3>{item.nome}</h3>
                <p>{item.preco}</p>
              </NamePrice>
              <Delete src={DeleteItem} alt="Excluir prato" />
            </Product>
          ))}
        </ProductsList>
        <TotalValue>
          <p>Valor total</p>
          <p>R$ 60,00</p>
        </TotalValue>
        <Button title="Comprar" type="button">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
