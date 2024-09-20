import React from 'react'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  columns: 'home' | 'restaurant'
}

export const ProductsList = ({columns}: Props) => (
  <Container>
    <List  columns={columns}>
      <Product
        title="Hioki Sushi"
        description="teste"
        image="//placehold.it/470x217"
        valuation="4,9"
        infos={['Destaque da semana', 'Japonesa']}
      />
      <Product
        title="La Dolce Vita Tratoria"
        description="teste"
        image="//placehold.it/472x217"
        valuation="4,9"
        infos={['Italiana']}
      />
      <Product
        title="Hioki Sushi"
        description="teste"
        image="//placehold.it/472x217"
        valuation="4,9"
        infos={['Italiana']}
      />
      <Product
        title="La Dolce Vita Tratoria"
        description="teste"
        image="//placehold.it/472x217"
        valuation="4,9"
        infos={['Italiana']}
      />
      <Product
        title="Hioki Sushi"
        description="teste"
        image="//placehold.it/472x217"
        valuation="4,9"
        infos={['Italiana']}
      />
      <Product
        title="La Dolce Vita Tratoria"
        description="teste"
        image="//placehold.it/472x217"
        valuation="4,9"
        infos={['Italiana']}
      />
    </List>
  </Container>
)
