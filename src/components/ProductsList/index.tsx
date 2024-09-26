import React from 'react'
import Product from '../Product'
import { Container, List } from './styles'
import Restaurants from '../../models/Restaurant'
import { useLocation } from 'react-router-dom'

export type Props = {
  columns: 'home' | 'restaurant'
  restaurants: Restaurants[]
}

export const ProductsList = ({ columns, restaurants }: Props) => {
  const location = useLocation();
  columns = location.pathname === '/' ? 'home' : 'restaurant';
  return (
  <Container>
    <List columns={columns}>
      {restaurants.map((restaurant) => {
        const formattedTitle = restaurant.title.toLowerCase().replace(/ /g, '-')
        return (
          <Product
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            image={restaurant.image}
            valuation={restaurant.valuation}
            infos={restaurant.infos}
            to={`/${formattedTitle}`}
          />
        )
      })}
    </List>
  </Container>
)}
