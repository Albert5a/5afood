import React from 'react'
import {
  CardComponent,
  Description,
  InfoContainter,
  Infos,
  ProductImage,
  ProductTitle,
  TitleValuationContent,
  Valuation,
  ValuationContent
} from './styles'
// import ImageProduct from '../ImageProduct'
import Button from '../Button'
import star from '../../assets/images/star.png'
import Tag from '../Tag'

type Props = {
  title: string
  category?: string
  valuation: string
  description: string
  typeFood?: string
  image: string
  infos: string[]
  to?: string
}

const Product = ({
  title,
  valuation,
  description,
  image,
  infos,
  to
}: Props) => {
  return (
    <CardComponent>
      <ProductImage src={image} alt="title" />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <InfoContainter>
        <div>
          <TitleValuationContent>
            <ProductTitle>{title}</ProductTitle>
            <ValuationContent className="ValueContainer">
              <Valuation className="Value">{valuation}</Valuation>
              <img src={star} alt="Estrelas" />
            </ValuationContent>
          </TitleValuationContent>
          <Description>{description}</Description>
        </div>
        <Button type="link" to={to} title="Saiba mais" />
      </InfoContainter>
    </CardComponent>
  )
}

export default Product
