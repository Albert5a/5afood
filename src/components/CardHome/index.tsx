import React from 'react'
import { CardComponent } from './styles'
import ImageCardHome from '../ImageCardHome'
import Button from '../Button'
import star from '../../assets/images/star.png'

type Props = {
  title: string
}

const CardHome = ({ title }: Props) => {
  return (
    <CardComponent>
      <ImageCardHome />
      <div className="InfoContainter">
        <div className="TitleValue">
          <h2>{title}</h2>
          <div className="ValueContainer">
            <p className="Value">4,9</p>
            <img
              src={star}
              alt="Estrelas"
            />
          </div>
        </div>
        <div className="InfoContainer">
          <p>
            Peça já a melhor comida japonesa, ou italiana ou a que estiver
            aparecendo na foto sejas feliz com a minha criatividade de escrver
            uma descrição ao invés de utilizar um Lorem de dev engessado mas que
            provavelmente programa melhor do que eu, mas eu tenho sede de
            aprender e não vou parar.
          </p>
          <Button color="info">Saiba mais</Button>
        </div>
      </div>
    </CardComponent>
  )
}

export default CardHome
