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
}

const ProductsCard = ({ title, description, image }: Props) => {
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
        <Button type="link" title="Saiba mais" />
      </InfoContainter>
    </CardComponent>
  )
}

export default ProductsCard
