import React from 'react'
import {
  ButtonContainer,
  FormCheckout,
  InputContent,
  Row
} from '../Delivery/styles'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formatPrice } from '../ProductModal'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Payment = () => {
  const dispatch = useDispatch()
  // const { items } = useSelector((state: RootReducer) => state.cart)
  const totalPrice = useSelector((state: RootReducer) => state.cart.totalPrice)



  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      monthlyValidity: '',
      annualValidity: ''
    },
    validationSchema: {
      cardName: Yup.string().min(5, 'O nome precisa de pelo menos 5 caracteres').required('Obrigatório'),
      cardNumber: Yup.string().min(16, 'Somente 16 números').max(16, 'Somente 16 números').required('Obrigatório'),
      cvv: Yup.string().min(3, 'Somente 3 números').max(3, 'Somente 3 números').required('Obrigatório'),
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const handleSidebarChange = (value: 'cart' | 'delivery' | 'payment') => {
    dispatch(setSidebar(value))
  }

  console.log(form)

  return (
    <FormCheckout onSubmit={form.handleSubmit}>
      <h3>Pagamento - Valor a pagar {formatPrice(totalPrice)}</h3>
      <InputContent>
        <label htmlFor="cardName">Nome no cartão</label>
        <input
          type="text"
          name="cardName"
          id="cardName"
          value={form.values.cardName}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </InputContent>
      <Row>
        <InputContent maxWidth="80%">
          <label htmlFor="cardNumber">Número do cartão</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={form.values.cardNumber}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </InputContent>
        <InputContent maxWidth="20%">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            value={form.values.cvv}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </InputContent>
      </Row>
      <Row>
        <InputContent>
          <label htmlFor="monthlyValidity">Mês de vencimento</label>
          <input
            type="text"
            name="monthlyValidity"
            id="monthlyValidity"
            value={form.values.monthlyValidity}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </InputContent>
        <InputContent>
          <label htmlFor="annualValidity">Ano de vencimento</label>
          <input
            type="text"
            name="annualValidity"
            id="annualValidity"
            value={form.values.annualValidity}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </InputContent>
      </Row>

      <ButtonContainer>
        <Button type="button" title="Finalizar pagamento">
          Finalizar pagamento
        </Button>
        <Button
          onClick={() => handleSidebarChange('delivery')}
          type="button"
          title="Voltar para edição de endereço"
        >
          Voltar para edição de endereço
        </Button>
      </ButtonContainer>
    </FormCheckout>
  )
}

export default Payment
