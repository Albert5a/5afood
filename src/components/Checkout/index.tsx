import React, { useState } from 'react'
import { Formik, useFormik, Form, Field } from 'formik'
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
  receiver: string
  address: string
  city: string
  cep: string
  number: number
  complement?: string
  cardName?: string
  cardNumber?: string
  cvv?: number
  monthlyValidity?: number
  annualValidity?: number
}

const Checkout = () => {
  // const [purchase, { isLoading, data }] = usePurchaseMutation()
  const [currentStep, setCurrentStep] = useState(0)
  const [checkoutData, setCheckoutData] = useState<CheckoutProps>({
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
  })

  const makeRequest = (formData: CheckoutProps) => {
    console.log('Form subimitted', formData)
  }

  const nextStep = (newData: CheckoutProps, final = false) => {
    setCheckoutData((prev) => ({ ...prev, ...newData }))

    if (final) {
      makeRequest(newData)
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
    />
  ]
  console.log('data', checkoutData)
  return <>{steps[currentStep]}</>
}

// const totalPrice = useSelector((state: RootReducer) => state.cart.totalPrice)

//   validationSchema: Yup.object({
//     receiver: Yup.string()
//       .min(5, 'O nome precisa de pelo menos 5 caracteres')
//       .required('Obrigatório'),
//     address: Yup.string().min(5, 'Endereço inválido').required('Obrigatório'),
//     city: Yup.string().min(3, 'Cidade inválida').required('Obrigatório'),
//     cep: Yup.string()
//       .min(8, 'Cep inválido')
//       .max(8, 'Inválido')
//       .required('Obrigatório'),
//     number: Yup.string().required('Obrigatório'),
//     cardName: Yup.string().min(5, 'Nome inválido').required('Obrigatório'),
//     cardNumber: Yup.string()
//       .min(16, 'Somente 16 números')
//       .max(16, 'Somente 16 números')
//       .required('Obrigatório'),
//     cvv: Yup.string()
//       .min(3, 'Somente 3 números')
//       .max(3, 'Somente 3 números')
//       .required('Obrigatório'),
//     monthlyValidity: Yup.string()
//       .min(2, 'Somente 2 números')
//       .max(2, 'Somente 2 números')
//       .required('Obrigatório'),
//     annualValidity: Yup.string()
//       .min(4, 'Somente 4 números')
//       .max(4, 'Somente 4 números')
//       .required('Obrigatório')
//   }),
//   onSubmit: (values) => {
//     purchase({
//       delivery: {
//         receiver: values.receiver,
//         address: {
//           description: values.address,
//           city: values.city,
//           zipCode: values.cep,
//           number: values.number,
//           complement: values.complement
//         }
//       },
//       payment: {
//         card: {
//           name: values.cardName,
//           number: values.cardNumber,
//           code: values.cvv,
//           expires: {
//             month: values.monthlyValidity,
//             year: values.annualValidity
//           }
//         }
//       },
//       products: [
//         {
//           id: 1,
//           price: 10
//         }
//       ]
//     })
//   }
// })

// refatorar para formik step

// const previousStep = (newData) => {
//   setCurrentStep(prev => prev - 1)
// }

// const valuess = {
//   delivery: {
//     receiver: form.values.receiver,
//     address: {
//       description: form.values.address,
//       city: form.values.city,
//       zipCode: form.values.cep,
//       number: form.values.number,
//       complement: form.values.complement
//     }
//   },
//   payment: {
//     card: {
//       name: form.values.cardName,
//       number: form.values.cardNumber,
//       code: form.values.cvv,
//       expires: {
//         month: form.values.monthlyValidity,
//         year: form.values.annualValidity
//       }
//     }
//   },
//   products: [
//     {
//       id: 1,
//       price: 10
//     }
//   ]
// }

// const checkInputHasError = (fieldName: string) => {
//   const isTouched = fieldName in form.touched
//   const isInvalid = fieldName in form.errors
//   const hasError = isTouched && isInvalid

//   if (isTouched && isInvalid) return hasError
// }

// const renderCheckout = () => {
//   if (sidebar === 'delivery') {
//     return (
//       <>
//         <h3>Entrega</h3>
//         <InputContent>
//           <label htmlFor="receiver">Quem irá receber</label>
//           <input
//             type="text"
//             name="receiver"
//             id="receiver"
//             value={form.values.receiver}
//             onChange={form.handleChange}
//             onBlur={form.handleBlur}
//             className={checkInputHasError('receiver') ? 'error' : ''}
//           />
//         </InputContent>
//         <InputContent>
//           <label htmlFor="address">Endereço</label>
//           <input
//             type="text"
//             name="address"
//             id="address"
//             value={form.values.address}
//             onChange={form.handleChange}
//             onBlur={form.handleBlur}
//             className={checkInputHasError('address') ? 'error' : ''}
//           />
//         </InputContent>
//         <InputContent>
//           <label htmlFor="city">Cidade</label>

//           <input
//             type="text"
//             name="city"
//             id="city"
//             value={form.values.city}
//             onChange={form.handleChange}
//             onBlur={form.handleBlur}
//             className={checkInputHasError('city') ? 'error' : ''}
//           />
//         </InputContent>
//         <Row>
//           <InputContent>
//             <label htmlFor="cep">CEP</label>
//             <input
//               type="text"
//               name="cep"
//               id="cep"
//               value={form.values.cep}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//               className={checkInputHasError('cep') ? 'error' : ''}
//             />
//           </InputContent>
//           <InputContent>
//             <label htmlFor="number">Número</label>
//             <input
//               type="number"
//               name="number"
//               id="number"
//               value={form.values.number}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//               className={checkInputHasError('number') ? 'error' : ''}
//             />
//           </InputContent>
//         </Row>
//         <InputContent>
//           <label htmlFor="complement">Complemento</label>
//           <input
//             type="text"
//             name="complement"
//             id="complement"
//             value={form.values.complement}
//             onChange={form.handleChange}
//             onBlur={form.handleBlur}
//             className={checkInputHasError('complement') ? 'error' : ''}
//           />
//         </InputContent>
//         <ButtonContainer>
//           <Button
//             onClick={() => nextStep('payment')}
//             type="button"
//             title="Continuar com o Pamento"
//           >
//             Continuar com o Pamento
//           </Button>
//           <Button
//             onClick={() => previousStep('cart')}
//             type="button"
//             title="Voltar para o carrinho"
//           >
//             Voltar para o carrinho
//           </Button>
//         </ButtonContainer>
//       </>
//     )
//   } else if (sidebar === 'payment') {
//     return (
//       <>
//         <h3>Pagamento - Valor a pagar {parseToBrl(totalPrice)}</h3>
//         <InputContent>
//           <label htmlFor="cardName">Nome no cartão</label>
//           <input
//             type="string"
//             name="cardName"
//             id="cardName"
//             value={form.values.cardName}
//             onChange={form.handleChange}
//             onBlur={form.handleBlur}
//             className={checkInputHasError('cardName') ? 'error' : ''}
//           />
//         </InputContent>
//         <Row>
//           <InputContent maxWidth="80%">
//             <label htmlFor="cardNumber">Número do cartão</label>
//             <input
//               type="string"
//               name="cardNumber"
//               id="cardNumber"
//               value={form.values.cardNumber}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//               className={checkInputHasError('cardNumber') ? 'error' : ''}
//             />
//           </InputContent>
//           <InputContent maxWidth="20%">
//             <label htmlFor="cvv">CVV</label>
//             <input
//               type="number"
//               name="cvv"
//               id="cvv"
//               value={form.values.cvv}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//               className={checkInputHasError('cvv') ? 'error' : ''}
//             />
//           </InputContent>
//         </Row>
//         <Row>
//           <InputContent>
//             <label htmlFor="monthlyValidity">Mês de vencimento</label>
//             <input
//               type="number"
//               name="monthlyValidity"
//               id="monthlyValidity"
//               value={form.values.monthlyValidity}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//               className={checkInputHasError('monthlyValidity') ? 'error' : ''}
//             />
//           </InputContent>
//           <InputContent>
//             <label htmlFor="annualValidity">Ano de vencimento</label>
//             <input
//               type="number"
//               name="annualValidity"
//               id="annualValidity"
//               value={form.values.annualValidity}
//               onChange={form.handleChange}
//               onBlur={form.handleBlur}
//               className={checkInputHasError('annualValidity') ? 'error' : ''}
//             />
//           </InputContent>
//         </Row>
//         <ButtonContainer>
//           <Button
//             onClick={() => {
//               purchase(valuess), nextStep('confirm')
//             }}
//             type="submit"
//             title="Finalizar pagamento"
//           >
//             Finalizar pagamento
//           </Button>
//           <Button
//             onClick={() => previousStep('delivery')}
//             type="button"
//             title="Voltar para edição de endereço"
//           >
//             Voltar para edição de endereço
//           </Button>
//         </ButtonContainer>
//       </>
//     )
//   } else {
//     return isLoading ? (
//       <h3>Carregando...</h3>
//     ) : (
//       <ConfirmOrder orderId={data?.orderId} />
//     )
//   }
// }

//   return (
//     <FormCheckout onSubmit={form.handleSubmit}>{renderCheckout()}</FormCheckout>
//   )
// }

interface StepProps {
  next: (values: CheckoutProps, final?: boolean) => void
  data: CheckoutProps
  prev?: (values: CheckoutProps) => void
}

// botão de voltar recebe função antiga de estado global
// const sidebar = useSelector((state: RootReducer) => state.cart.sidebar)

export const StepOne = (props: StepProps) => {
  const handleSubmit = (values: CheckoutProps) => {
    props.next(values)
  }
  const dispatch = useDispatch()
  const handleCart = () => {
    dispatch(setSidebar('cart'))
  }

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
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

// botão de voltar recebe função de step
const StepTwo = (props: StepProps) => {
  const handleSubmit = (values: CheckoutProps) => {
    props.next(values, true)
  }

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <FormCheckout>
          {/* <h3>Pagamento - Valor a pagar {parseToBrl(totalPrice)}</h3> */}
          <InputContent>
            <label htmlFor="cardName">Nome no cartão</label>
            <InputField
              type="string"
              name="cardName"
              id="cardName"
              // value={form.values.cardName}
              // onChange={form.handleChange}
              // onBlur={form.handleBlur}
              // className={checkInputHasError('cardName') ? 'error' : ''}
            />
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
              // onClick={() => handlePrevStep('delivery')}
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

// const StepThree = () => {
//   return <ConfirmOrder orderId={data?.orderId} />
// }

export default Checkout
