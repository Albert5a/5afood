import React from 'react'
import { CardComponent, InfoContainter, Infos } from './styles'
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

const Product = ({ title, valuation, description, image, infos, to }: Props) => {
  return (
    <CardComponent>
      <img src={image} alt="title" />
      <Infos>
        {infos.map(info => <Tag key={info}>{info}</Tag>)}
      </Infos>
      <InfoContainter>
        <div className="TitleValuationContent">
          <h2>{title}</h2>
          <div className="ValueContainer">
            <p className="Value">{valuation}</p>
            <img src={star} alt="Estrelas" />
          </div>
        </div>
          <p>{description}</p>
          <Button type="link" to={to} title="Saiba mais">
            Saiba mais
          </Button>
      </InfoContainter>
    </CardComponent>
  )
}

export default Product
