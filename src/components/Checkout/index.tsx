import React, { useEffect, useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
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

const Checkout = () => {
  const [purchase, { data }] = usePurchaseMutation()
  const [orderId, setOrderId] = useState<string | undefined>(undefined)
  const { items } = useSelector((state: RootReducer) => state.cart)
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
    products: items.map((item) => ({
      id: item.id.toString(),
      price: item.preco
    }))
  })
  const [currentStep, setCurrentStep] = useState(0)

  const makeRequest = (formData: CheckoutProps) => {
    purchase(formData)
  }

  useEffect(() => {
    if (data) {
      setOrderId(data.orderId)
    }
  }, [data])

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
    orderId ? (
      <StepThree key={currentStep} orderId={orderId} />
    ) : (
      <h3>Carregando...</h3>
    )
  ]
  return <>{steps[currentStep]}</>
}

interface StepProps {
  next?: (values: CheckoutProps, final?: boolean) => void
  data: CheckoutProps
  prev?: (values: CheckoutProps) => void
}

const stepOneValidationSchema = Yup.object({
  receiver: Yup.string()
    .min(5, 'O nome precisa de pelo menos 5 caracteres')
    .required('Obrigatório'),
  address: Yup.string().min(5, 'Endereço inválido').required('Obrigatório'),
  city: Yup.string().min(2, 'Cidade inválida').required('Obrigatório'),
  cep: Yup.string()
    .min(8, 'Cep inválido')
    .max(8, 'Inválido')
    .required('Obrigatório'),
  number: Yup.string().required('Obrigatório')
})

export const StepOne = (props: StepProps) => {
  const handleSubmit = (values: CheckoutProps) => {
    props.next && props.next(values)
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
            <InputField type="text" name="receiver" id="receiver" />
            <ErrorMessage component="p" className="textError" name="receiver" />
          </InputContent>
          <InputContent>
            <label htmlFor="address">Endereço</label>
            <InputField type="text" name="address" id="address" />
            <ErrorMessage component="p" className="textError" name="address" />
          </InputContent>
          <InputContent>
            <label htmlFor="city">Cidade</label>
            <InputField type="text" name="city" id="city" />
            <ErrorMessage component="p" className="textError" name="city" />
          </InputContent>
          <Row>
            <InputContent>
              <label htmlFor="cep">CEP</label>
              <InputField
                type="text"
                name="cep"
                id="cep"
                placeholder="00000-000"
              />
              <ErrorMessage component="p" className="textError" name="cep" />
            </InputContent>
            <InputContent>
              <label htmlFor="number">Número</label>
              <InputField type="number" name="number" id="number" />
              <ErrorMessage component="p" className="textError" name="number" />
            </InputContent>
          </Row>
          <InputContent>
            <label htmlFor="complement">Complemento</label>
            <InputField type="text" name="complement" id="complement" />
            <ErrorMessage
              component="p"
              className="textError"
              name="complement"
            />
          </InputContent>
          <ButtonContainer>
            <Button type="submit" title="Continuar com o Pamento">
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
  cvv: Yup.string().min(3, '3 núm.').max(3, '3 núm.').required('Obrigatório'),
  monthlyValidity: Yup.string()
    .min(1, '2 números')
    .max(2, '2 números')
    .required('Obrigatório'),
  annualValidity: Yup.string()
    .min(4, 'Somente 4 números')
    .max(4, 'Somente 4 números')
    .required('Obrigatório')
})

const StepTwo = (props: StepProps) => {
  const handleSubmit = (values: CheckoutProps) => {
    props.next && props.next(values, true)
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
            <InputField type="string" name="cardName" id="cardName" />
            <ErrorMessage component="p" className="textError" name="cardName" />
          </InputContent>
          <Row>
            <InputContent maxWidth="80%">
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputField
                type="string"
                name="cardNumber"
                id="cardNumber"
                placeholder="0000-0000-0000-0000"
              />
              <ErrorMessage
                component="p"
                className="textError"
                name="cardNumber"
              />
            </InputContent>
            <InputContent maxWidth="20%">
              <label htmlFor="cvv">CVV</label>
              <InputField type="number" name="cvv" id="cvv" />
              <ErrorMessage component="p" className="textError" name="cvv" />
            </InputContent>
          </Row>
          <Row>
            <InputContent>
              <label htmlFor="monthlyValidity">Mês de vencimento</label>
              <InputField
                type="number"
                name="monthlyValidity"
                id="monthlyValidity"
              />
              <ErrorMessage
                component="p"
                className="textError"
                name="monthlyValidity"
              />
            </InputContent>
            <InputContent>
              <label htmlFor="annualValidity">Ano de vencimento</label>
              <InputField
                type="number"
                name="annualValidity"
                id="annualValidity"
              />
              <ErrorMessage
                component="p"
                className="textError"
                name="annualValidity"
              />
            </InputContent>
          </Row>
          <ButtonContainer>
            <Button type="submit" title="Finalizar pagamento">
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

const StepThree = ({ orderId }: { orderId: string }) => {
  return <ConfirmOrder orderId={orderId} />
}

export default Checkout
