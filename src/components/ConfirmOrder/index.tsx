import React from 'react'
import { ConfirmText, ConfirmTitle } from './styles'
import Button from '../Button'


const ConfirmOrder = ({ orderId }: CheckoutResponse) => {
  return (
    <div>
      <ConfirmTitle>Pedido realizado: {orderId}</ConfirmTitle>
      <ConfirmText>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
        <br />
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
        <br />
        <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br />
        <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </ConfirmText>
      <Button
        onClick={() => (window.location.href = '/')}
        type="button"
        title="Concluir"
      >
        Concluir
      </Button>
    </div>
  )
}

export default ConfirmOrder
