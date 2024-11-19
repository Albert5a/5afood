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
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

type Props = {
  className: string
  onClick: () => void
  image: string
  name: string
  description: string
  portion: string
  price: number | undefined
  product: Product
}

const ProductModal = ({
  className,
  onClick,
  name,
  description,
  portion,
  price,
  image,
  product
}: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(product))
    dispatch(open())
  }
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
              onClick={addToCart}
              type="button"
              title={`Adicionar ao carrinho - ${parseToBrl(price)}`}
            >
              {`Adicionar ao carrinho - ${parseToBrl(price)}`}
            </Button>
          </div>
        </InfoContent>
      </ModalContent>
      <div onClick={onClick} className="overlay"></div>
    </ModalContainer>
  )
}

export default ProductModal
