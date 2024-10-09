import React from 'react'

import Close from '../../assets/images/close 1.png'
import {
  CloseButton,
  InfoContent,
  ModalContainer,
  ModalContent,
  ModalInfo,
  ModalText,
  ModalTitle
} from './styles'
import Button from '../Button'

type Props = {
  className: string
  onClick: () => void
  image: string
  name: string
  description: string
  portion: string
  price: number | undefined
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductModal = ({
  className,
  onClick,
  name,
  description,
  portion,
  price,
  image
}: Props) => {
  return (
    <ModalContainer className={className}>
      <ModalContent>
        <header>
          <CloseButton onClick={onClick} src={Close} alt="Fechar" />
        </header>
        <InfoContent>
          <img src={image} alt="Pizza" />
          <div>
            <ModalTitle>{name}</ModalTitle>
            <ModalText>{description}</ModalText>
            <ModalInfo>{portion}</ModalInfo>
            <Button
              type="button"
              title={`Adicionar ao carrinho - ${formatPrice(price)}`}
            >
              {`Adicionar ao carrinho - ${formatPrice(price)}`}
            </Button>
          </div>
        </InfoContent>
      </ModalContent>
      <div onClick={onClick} className="overlay"></div>
    </ModalContainer>
  )
}

export default ProductModal
