import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
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

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
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
          <p>{formatPrice(getTotalPrice())}</p>
        </TotalValue>
        <Button title="Comprar" type="button">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
