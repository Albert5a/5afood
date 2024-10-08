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

// posso refatorar com o ProductsCard trocando type por {interface RestaurantProps extends ProductsProps{}}

type Props = {
  title: string
  category?: string
  valuation: number
  description: string
  typeFood?: string
  image: string
  infos: string[]
  to?: string
  onClick?: () => void
}

const RestaurantsCard = ({
  title,
  valuation,
  description,
  image,
  infos,
  to,
  onClick
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
        <Button type="link" to={to} onClick={onClick} title="Saiba mais">
          Saiba mais
        </Button>
      </InfoContainter>
    </CardComponent>
  )
}

export default RestaurantsCard
