import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, setSidebar } from '../../store/reducers/cart'
import DeleteItem from '../../assets/images/delete.png'
import Button from '../Button'
import { parseToBrl } from '../../utils'
import Close from '../../assets/images/close 1.png'
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
import { CloseButton } from '../ProductModal/styles'

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

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleSidebarChange = () => {
    if (items.length > 0) {
      dispatch(setSidebar('delivery'))
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar sidebar={sidebar}>
        <header>
          <CloseButton onClick={closeCart} src={Close} alt="Fechar" />
        </header>
        {sidebar === 'cart' ? (
          items.length > 0 ? (
            <>
              <ProductsList>
                {items.map((item) => (
                  <Product key={item.id}>
                    <ProductImage src={item.foto} alt={item.nome} />
                    <NamePrice>
                      <h3>{item.nome}</h3>
                      <p>{parseToBrl(item.preco)}</p>
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
                <p>{parseToBrl(totalPrice)}</p>
              </TotalValue>
              <Button
                onClick={handleSidebarChange}
                title="Comprar"
                type="button"
              >
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <p>
              Seu carrinho esta vazio. Volte ao restaurante e escolha um
              produto!
            </p>
          )
        ) : (
          <Checkout />
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
