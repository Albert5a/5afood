import React from 'react'
import { ImageContainer } from './styles'
import Tag from '../Tag'
import sushiImg from '../../assets/images/sushi.png'

const ImageProduct = () => {
  return (
    <ImageContainer style={{ backgroundImage: `url(${sushiImg})` }}>
      <div className="TagContainer">
        <Tag>Destaques da semana</Tag>
        <Tag>Japonesa</Tag>
      </div>
    </ImageContainer>
  )
}

export default ImageProduct
