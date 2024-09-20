import React from 'react'
import Product from '../Product'
import { Container, List } from './styles'

export const ProductsList = () => (
  <Container>
    <List>
      <Product title="Hioki Sushi" />
      <Product title="La Dolce Vita Tratoria" />
      <Product title="Hioki Sushi" />
      <Product title="La Dolce Vita Tratoria" />
      <Product title="Hioki Sushi" />
      <Product title="La Dolce Vita Tratoria" />
    </List>
  </Container>
)
