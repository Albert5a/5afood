import React from 'react'
import {
  ButtonContainer,
  FormCheckout,
  InputContent,
  Row
} from '../Delivery/styles'
import Button from '../Button'
import { SmallerInput, BiggerInput } from './styles'
import { useDispatch } from 'react-redux'
import { setSidebar } from '../../store/reducers/cart'

const Payment = () => {
  const dispatch = useDispatch()

  const handleSidebarChange = (value: 'cart' | 'delivery' | 'payment') => {
    dispatch(setSidebar(value))
  }
  return (
    <FormCheckout>
      <h3>Pagamento - Valor a pagar R$ 45,00</h3>
      <InputContent>
        <label htmlFor="card-name">Nome no cartão</label>
        <input type="text" name="card-name" id="card-name" />
      </InputContent>
      <Row>
        <BiggerInput>
          <label htmlFor="card-number">Número do cartão</label>
          <input type="text" name="card-number" id="card-number" />
        </BiggerInput>
        <SmallerInput>
          <label htmlFor="cvv">CVV</label>
          <input type="text" name="cvv" id="cvv" />
        </SmallerInput>
      </Row>
      <Row>
        <InputContent>
          <label htmlFor="monthly-validity">Mês de vencimento</label>
          <input type="text" name="monthly-validity" id="monthly-validity" />
        </InputContent>
        <InputContent>
          <label htmlFor="annual-validity">Ano de vencimento</label>
          <input type="text" name="annual-validity" id="annual-validity" />
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
