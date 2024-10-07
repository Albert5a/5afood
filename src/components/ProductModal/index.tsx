import React from 'react'

import Pizza from '../../assets/images/pizza4.png'
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
}
const ProductModal = ({className, onClick}: Props) => {
  return (
    <ModalContainer onClick={onClick} className={className}>
      <ModalContent>
        <header>
          <CloseButton onClick={onClick} src={Close} alt="Fechar" />
        </header>
        <InfoContent>
          <img src={Pizza} alt="Pizza" />
          <div>
            <ModalTitle>Pizza Margerita</ModalTitle>
            <ModalText>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </ModalText>
            <ModalInfo>Serve: de 2 a 3 pessoas</ModalInfo>
            <Button type='button' title='Adicionar ao carrinho - R$ 60,90'>Adicionar ao carrinho - R$ 60,90</Button>
          </div>
        </InfoContent>
      </ModalContent>
    </ModalContainer>
  )
}

export default ProductModal
