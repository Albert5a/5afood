import React, { useState } from 'react'
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setSidebar } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import Button from '../Button'
import { parseToBrl } from '../../utils'
import ConfirmOrder from '../ConfirmOrder'
import {
  ButtonContainer,
  FormCheckout,
  InputContent,
  InputField,
  Row
} from './styles'
import { useNavigate } from 'react-router-dom'

type CheckoutProps = {
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
  products: [
    {
      id: number
      price: number
    }
  ]
}

const Checkout = () => {
  const [purchase, { data }] = usePurchaseMutation()
  const totalPrice = useSelector((state: RootReducer) => state.cart.totalPrice)
  const [checkoutData, setCheckoutData] = useState<CheckoutProps>({
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 1,
        complement: ''
      }
    },
    payment: {
      card: {
        name: '',
        number: '',
        code: 123,
        expires: {
          month: 7,
          year: 2034
        }
      }
    },
    products: [
      {
        id: data?.orderId,
        price: totalPrice
      }
    ]
  })
  const [currentStep, setCurrentStep] = useState(0)
  // para passar os erros por propriedade para os components steps (descobrir o porquê)
  // const [errors, setErrors] = useState({})

  const makeRequest = (formData: CheckoutProps) => {
    purchase(formData)
  }

  const nextStep = (newData: CheckoutProps, final = false) => {
    setCheckoutData((prev) => ({ ...prev, ...newData }))

    if (final) {
      makeRequest(newData)
      setCurrentStep((prev) => prev + 1)
      return
    }
    setCurrentStep((prev) => prev + 1)
  }

  const pervStep = (newData: CheckoutProps) => {
    setCheckoutData((prev) => ({ ...prev, ...newData }))
    setCurrentStep((prev) => prev - 1)
  }

  const steps = [
    <StepOne key={currentStep} next={nextStep} data={checkoutData} />,
    <StepTwo
      key={currentStep}
      next={nextStep}
      prev={pervStep}
      data={checkoutData}
    />,
    <StepThree key={currentStep} />
  ]
  console.log('data', checkoutData)
  return <>{steps[currentStep]}</>
}

interface StepProps {
  next: (values: CheckoutProps, final?: boolean) => void
  data: CheckoutProps
  prev?: (values: CheckoutProps) => void
}

const stepOneValidationSchema = Yup.object({
  receiver: Yup.string()
    .min(5, 'O nome precisa de pelo menos 5 caracteres')
    .required('Obrigatório'),
  address: Yup.string().min(5, 'Endereço inválido').required('Obrigatório'),
  city: Yup.string().min(3, 'Cidade inválida').required('Obrigatório'),
  cep: Yup.string()
    .min(8, 'Cep inválido')
    .max(8, 'Inválido')
    .required('Obrigatório'),
  number: Yup.string().required('Obrigatório')
})

export const StepOne = (props: StepProps) => {
  const handleSubmit = (values: CheckoutProps) => {
    props.next(values)
  }
  const dispatch = useDispatch()
  const handleCart = () => {
    dispatch(setSidebar('cart'))
  }

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormCheckout>
          <h3>Entrega</h3>
          <InputContent>
            <label htmlFor="receiver">Quem irá receber</label>
            <InputField
              type="text"
              name="receiver"
              id="receiver"
              // value={props.data.receiver}
              // onChange={form.handleChange}
              // onBlur={form.handleBlur}
              // className={checkInputHasError('receiver') ? 'error' : ''}
            />
            <ErrorMessage name="receiver" />
          </InputContent>
          <InputContent>
            <label htmlFor="address">Endereço</label>
            <InputField
              type="text"
              name="address"
              id="address"
              // value={props.data.address}
              // onChange={props.data.handleChange}
              // onBlur={form.handleBlur}
              // className={checkInputHasError('address') ? 'error' : ''}
            />
            <ErrorMessage name="address" />
          </InputContent>
          <InputContent>
            <label htmlFor="city">Cidade</label>
            <InputField
              type="text"
              name="city"
              id="city"
              // value={form.values.city}
              // onChange={form.handleChange}
              // onBlur={form.handleBlur}
              // className={checkInputHasError('city') ? 'error' : ''}
            />
            <ErrorMessage name="city" />
          </InputContent>
          <Row>
            <InputContent>
              <label htmlFor="cep">CEP</label>
              <InputField
                type="text"
                name="cep"
                id="cep"
                // value={form.values.cep}
                // onChange={form.handleChange}
                // onBlur={form.handleBlur}
                // className={checkInputHasError('cep') ? 'error' : ''}
              />
              <ErrorMessage name="cep" />
            </InputContent>
            <InputContent>
              <label htmlFor="number">Número</label>
              <InputField
                type="number"
                name="number"
                id="number"
                // value={form.values.number}
                // onChange={form.handleChange}
                // onBlur={form.handleBlur}
                // className={checkInputHasError('number') ? 'error' : ''}
              />
              <ErrorMessage name="number" />
            </InputContent>
          </Row>
          <InputContent>
            <label htmlFor="complement">Complemento</label>
            <InputField
              type="text"
              name="complement"
              id="complement"
              // value={form.values.complement}
              // onChange={form.handleChange}
              // onBlur={form.handleBlur}
              // className={checkInputHasError('complement') ? 'error' : ''}
            />
            <ErrorMessage name="complement" />
          </InputContent>
          <ButtonContainer>
            <Button
              // onClick={() => nextStep('payment')}
              type="submit"
              title="Continuar com o Pamento"
            >
              Continuar com o Pamento
            </Button>
            <Button
              onClick={handleCart}
              type="button"
              title="Voltar para o carrinho"
            >
              Voltar para o carrinho
            </Button>
          </ButtonContainer>
        </FormCheckout>
      )}
    </Formik>
  )
}

const stepTwoValidationSchema = Yup.object({
  cardName: Yup.string().min(5, 'Nome inválido').required('Obrigatório'),
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
})

const StepTwo = (props: StepProps) => {
  const handleSubmit = (values: CheckoutProps) => {
    props.next(values, true)
  }
  const totalPrice = useSelector((state: RootReducer) => state.cart.totalPrice)

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <FormCheckout>
          <h3>Pagamento - Valor a pagar {parseToBrl(totalPrice)}</h3>
          <InputContent>
            <label htmlFor="cardName">Nome no cartão</label>
            <InputField
              type="string"
              name="cardName"
              id="cardName"
              // value={form.values.cardName}
              // onChange={form.handleChange}
              // onBlur={form.handleBlur}
            />
            <ErrorMessage name="cardName" />
          </InputContent>
          <Row>
            <InputContent maxWidth="80%">
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputField
                type="string"
                name="cardNumber"
                id="cardNumber"
                // value={form.values.cardNumber}
                // onChange={form.handleChange}
                // onBlur={form.handleBlur}
                // className={checkInputHasError('cardNumber') ? 'error' : ''}
              />
              <ErrorMessage name="cardNumber" />
            </InputContent>
            <InputContent maxWidth="20%">
              <label htmlFor="cvv">CVV</label>
              <InputField
                type="number"
                name="cvv"
                id="cvv"
                // value={form.values.cvv}
                // onChange={form.handleChange}
                // onBlur={form.handleBlur}
                // className={checkInputHasError('cvv') ? 'error' : ''}
              />
              <ErrorMessage name="cvv" />
            </InputContent>
          </Row>
          <Row>
            <InputContent>
              <label htmlFor="monthlyValidity">Mês de vencimento</label>
              <InputField
                type="number"
                name="monthlyValidity"
                id="monthlyValidity"
                // value={form.values.monthlyValidity}
                // onChange={form.handleChange}
                // onBlur={form.handleBlur}
                // className={checkInputHasError('monthlyValidity') ? 'error' : ''}
              />
              <ErrorMessage name="monthlyValidity" />
            </InputContent>
            <InputContent>
              <label htmlFor="annualValidity">Ano de vencimento</label>
              <InputField
                type="number"
                name="annualValidity"
                id="annualValidity"
                // value={form.values.annualValidity}
                // onChange={form.handleChange}
                // onBlur={form.handleBlur}
                // className={checkInputHasError('annualValidity') ? 'error' : ''}
              />
              <ErrorMessage name="annualValidity" />
            </InputContent>
          </Row>
          <ButtonContainer>
            <Button
              // onClick={() => {
              //   purchase(valuess), nextStep('confirm')
              // }}
              type="submit"
              title="Finalizar pagamento"
            >
              Finalizar pagamento
            </Button>
            <Button
              onClick={() => props.prev && props.prev(values)}
              type="button"
              title="Voltar para edição de endereço"
            >
              Voltar para edição de endereço
            </Button>
          </ButtonContainer>
        </FormCheckout>
      )}
    </Formik>
  )
}

const StepThree = () => {
  const [purchase, { data }] = usePurchaseMutation()
  return <ConfirmOrder orderId={data?.orderId} />
}

export default Checkout
