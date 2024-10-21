import React from 'react'
import { ButtonContainer, FormCheckout, InputContent, Row } from './styles'
import Button from '../Button'
import { setSidebar } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'



const Delivery = () => {
  const dispatch = useDispatch()

  const handleSidebarChange = (value: 'cart' | 'delivery' | 'payment') => {
    dispatch(setSidebar(value))
  }

  // const form = useFormik({
  //   initialValues: {
  //     receiver: '',
  //     address: '',
  //     city: '',
  //     cep: '',
  //     number: '',
  //     complement: ''
  //   },
  //   validationSchema: {
  //     cardName: Yup.string().min(5, 'O nome precisa de pelo menos 5 caracteres').required('Obrigatório'),
  //     cardNumber: Yup.string().min(16, 'Somente 16 números').max(16, 'Somente 16 números').required('Obrigatório'),
  //     cvv: Yup.string().min(3, 'Somente 3 números').max(3, 'Somente 3 números').required('Obrigatório'),
  //   },
  //   onSubmit: (values) => {
  //     console.log(values)
  //   }
  // })

  return (
    <FormCheckout>
      <h3>Entrega</h3>
      <InputContent>
        <label htmlFor="receiver">Quem irá receber</label>
        <input type="text" name="receiver" id="receiver" />
      </InputContent>
      <InputContent>
        <label htmlFor="address">Endereço</label>
        <input type="text" name="address" id="address" />
      </InputContent>
      <InputContent>
        <label htmlFor="city">Cidade</label>
        <input type="text" name="city" id="city" />
      </InputContent>
      <Row>
        <InputContent>
          <label htmlFor="cep">CEP</label>
          <input type="text" name="cep" id="cep" />
        </InputContent>
        <InputContent>
          <label htmlFor="number">Número</label>
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
