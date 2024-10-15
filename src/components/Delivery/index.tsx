import React from 'react'
import { ButtonContainer, FormCheckout, InputContent, Row } from './styles'
import Button from '../Button'
import { setSidebar } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'



const Delivery = () => {
  const dispatch = useDispatch()

  const handleSidebarChange = (value: 'cart' | 'delivery' | 'payment') => {
    dispatch(setSidebar(value))
  }

  return (
    <FormCheckout>
      <h3>Entrega</h3>
      <InputContent>
        <label htmlFor="receiver">Quem irá receber</label>
        <input type="text" name="receiver" id="receiver" />
      </InputContent>
      <InputContent>
        <label htmlFor="receiver">Endereço</label>
        <input type="text" name="address" id="address" />
      </InputContent>
      <InputContent>
        <label htmlFor="receiver">Cidade</label>
        <input type="text" name="address" id="address" />
      </InputContent>
      <Row>
        <InputContent>
          <label htmlFor="cep">Endereço</label>
          <input type="text" name="cep" id="cep" />
        </InputContent>
        <InputContent>
          <label htmlFor="number">Cidade</label>
          <input type="text" name="number" id="number" />
        </InputContent>
      </Row>
      <InputContent>
        <label htmlFor="complement">Complemento</label>
        <input type="text" name="complement" id="complement" />
      </InputContent>
      <ButtonContainer>
        <Button onClick={() => handleSidebarChange('payment')} type="button" title="Continuar com o Pamento">
          Continuar com o Pamento
        </Button>
        <Button onClick={() => handleSidebarChange('cart')} type="button" title="Voltar para o carrinho">
          Voltar para o carrinho
        </Button>
      </ButtonContainer>
    </FormCheckout>
  )
}

export default Delivery
