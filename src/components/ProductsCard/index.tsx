import React from 'react'
import {
  CardComponent,
  Description,
  InfoContainter,
  ProductImage,
  ProductTitle,
  TitleValuationContent
} from './styles'
import Button from '../Button'

type Props = {
  name: string
  description: string
  image: string
  to?: string
  onClick?: () => void
}

const ProductsCard = ({ name, description, image, onClick }: Props) => {
  return (
    <CardComponent>
      <ProductImage src={image} alt="title" />
      <InfoContainter>
        <div>
          <TitleValuationContent>
            <ProductTitle>{name}</ProductTitle>
          </TitleValuationContent>
          <Description>
            {description.length > 170
              ? `${description.substring(0, 170)}...`
              : description}
          </Description>
        </div>
        <Button type="button" onClick={onClick} title="Saiba mais">
          Saiba mais
        </Button>
      </InfoContainter>
    </CardComponent>
  )
}

export default ProductsCard
