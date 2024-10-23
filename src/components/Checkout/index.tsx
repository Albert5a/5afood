import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { ButtonContainer, FormCheckout, InputContent, Row } from './styles'
import Button from '../Button'
import { setSidebar } from '../../store/reducers/cart'
import { formatPrice } from '../ProductModal'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const sidebar = useSelector((state: RootReducer) => state.cart.sidebar)
  const dispatch = useDispatch()
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const handleSidebarChange = (value: 'cart' | 'delivery' | 'payment') => {
    dispatch(setSidebar(value))
  }

  const totalPrice = useSelector((state: RootReducer) => state.cart.totalPrice)

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: 1,
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: 123,
      monthlyValidity: 12,
      annualValidity: 2024
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa de pelo menos 5 caracteres')
        .required('Obrigatório'),
      address: Yup.string().min(5, 'Endereço inválido').required('Obrigatório'),
      city: Yup.string().min(3, 'Cidade inválida').required('Obrigatório'),
      cep: Yup.string()
        .min(8, 'Cep inválido')
        .max(8, 'Inválido')
        .required('Obrigatório'),
      number: Yup.string().required('Obrigatório'),
      complement: Yup.string().required('Ponto de referência'),
      cardName: Yup.string()
        // .when((values, schema) => payWhithCard ? schema.required('Obrigatório') : schema),
        // .oneOf([Yup.ref('receiver')], 'Os nomes são diferentes')
        .min(5, 'Nome inválido')
        .required('Obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'Somente 16 números')
        .max(16, 'Somente 16 números')
        .required('Obrigatório'),
      cvv: Yup.string()
        .min(3, 'Somente 3 números')
        .max(3, 'Somente 3 números')
        .required('Obrigatório'),
      monthlyValidity: Yup.string()
        .min(2, 'Somente 2 números')
        .max(2, 'Somente 2 números')
        .required('Obrigatório'),
      annualValidity: Yup.string()
        .min(4, 'Somente 4 números')
        .max(4, 'Somente 4 números')
        .required('Obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cvv,
            expires: {
              month: values.monthlyValidity,
              year: values.annualValidity
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    if (isChanged && isInvalid) return message
    return ''
  }

  return (
    <FormCheckout onSubmit={form.handleSubmit}>
      {sidebar === 'delivery' ? (
        <>
          <h3>Entrega</h3>
          <InputContent>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              type="text"
              name="receiver"
              id="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
          </InputContent>
          <InputContent>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              id="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('address', form.errors.address)}</small>
          </InputContent>
          <InputContent>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('city', form.errors.city)}</small>
          </InputContent>
          <Row>
            <InputContent>
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                name="cep"
                id="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
            </InputContent>
            <InputContent>
              <label htmlFor="number">Número</label>
              <input
                type="number"
                name="number"
                id="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
            </InputContent>
          </Row>
          <InputContent>
            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              name="complement"
              id="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('complement', form.errors.complement)}
            </small>
          </InputContent>
          <ButtonContainer>
            <Button
              onClick={() => handleSidebarChange('payment')}
              type="button"
              title="Continuar com o Pamento"
            >
              Continuar com o Pamento
            </Button>
            <Button
              onClick={() => handleSidebarChange('cart')}
              type="button"
              title="Voltar para o carrinho"
            >
              Voltar para o carrinho
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <h3>Pagamento - Valor a pagar {formatPrice(totalPrice)}</h3>
          <InputContent>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="string"
              name="cardName"
              id="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
          </InputContent>
          <Row>
            <InputContent maxWidth="80%">
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="string"
                name="cardNumber"
                id="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </InputContent>
            <InputContent maxWidth="20%">
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                name="cvv"
                id="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
            </InputContent>
          </Row>
          <Row>
            <InputContent>
              <label htmlFor="monthlyValidity">Mês de vencimento</label>
              <input
                type="number"
                name="monthlyValidity"
                id="monthlyValidity"
                value={form.values.monthlyValidity}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'monthlyValidity',
                  form.errors.monthlyValidity
                )}
              </small>
            </InputContent>
            <InputContent>
              <label htmlFor="annualValidity">Ano de vencimento</label>
              <input
                type="number"
                name="annualValidity"
                id="annualValidity"
                value={form.values.annualValidity}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('annualValidity', form.errors.annualValidity)}
              </small>
            </InputContent>
          </Row>
          <ButtonContainer>
            <Button
              onClick={() => console.log(form.values)}
              type="button"
              title="Finalizar pagamento"
            >
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
        </>
      )}
    </FormCheckout>
  )
}

export default Checkout
