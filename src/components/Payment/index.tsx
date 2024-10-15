import React from 'react'
import {
  ButtonContainer,
  FormCheckout,
  InputContent,
  Row
} from '../Delivery/styles'
import Button from '../Button'
// import { SmallerInput, BiggerInput } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formatPrice } from '../ProductModal'

const Payment = () => {
  const dispatch = useDispatch()
  // const { items } = useSelector((state: RootReducer) => state.cart)
  const totalPrice = useSelector((state: RootReducer) => state.cart.totalPrice);

  const handleSidebarChange = (value: 'cart' | 'delivery' | 'payment') => {
    dispatch(setSidebar(value))
  }
  return (
    <FormCheckout>
      <h3>Pagamento - Valor a pagar {formatPrice(totalPrice)}</h3>
      <InputContent>
        <label htmlFor="card-name">Nome no cartão</label>
        <input type="text" name="card-name" id="card-name" />
      </InputContent>
      <Row>
        <InputContent maxWidth='80%'>
          <label htmlFor="card-number">Número do cartão</label>
          <input type="number" name="card-number" id="card-number" />
        </InputContent>
        <InputContent maxWidth='20%'>
          <label htmlFor="cvv">CVV</label>
          <input type="number" name="cvv" id="cvv" />
        </InputContent>
      </Row>
      <Row>
        <InputContent>
          <label htmlFor="monthly-validity">Mês de vencimento</label>
          <input type="number" name="monthly-validity" id="monthly-validity" />
        </InputContent>
        <InputContent>
          <label htmlFor="annual-validity">Ano de vencimento</label>
          <input type="number" name="annual-validity" id="annual-validity" />
        </InputContent>
      </Row>

      <ButtonContainer>
        <Button type="button" title="Finalizar pagamento">
          Finalizar pagamento
        </Button>
        <Button onClick={() => handleSidebarChange('delivery')} type="button" title="Voltar para edição de endereço">
          Voltar para edição de endereço
        </Button>
      </ButtonContainer>
    </FormCheckout>
  )
}

export default Payment
