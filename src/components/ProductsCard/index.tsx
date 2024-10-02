import React from 'react'
import {
  CardComponent,
  Description,
  InfoContainter,
  ProductImage,
  ProductTitle,
  TitleValuationContent,
} from './styles'
// import ImageProduct from '../ImageProduct'
import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
  to?: string
  onClick?: () => void
}

const ProductsCard = ({ title, description, image, onClick }: Props) => {
  return (
    <CardComponent>
      <ProductImage src={image} alt="title" />
      <InfoContainter>
        <div>
          <TitleValuationContent>
            <ProductTitle>{title}</ProductTitle>
          </TitleValuationContent>
          <Description>{description}</Description>
        </div>
        <Button type="link" onClick={onClick} title="Saiba mais">Saiba mais</Button>
      </InfoContainter>
    </CardComponent>
  )
}

export default ProductsCard
