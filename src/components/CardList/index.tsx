import React from 'react'
import { Container, List } from './styles'
import Restaurants from '../../models/Restaurant'
import RestaurantsCard from '../RestaurantsCard'
import ProductsCard from '../ProductsCard'
import Products from '../../models/Products'
// import { useLocation } from 'react-router-dom'

export type Props = {
  columns: 'home' | 'restaurant'
  restaurants?: Restaurants[]
  products?: Products[]
}

export const CardList = ({ columns, restaurants, products }: Props) => {
  return (
    <Container>
      <List columns={columns}>
        {columns === 'home' &&
          restaurants && restaurants.map((restaurant) => {
            const formattedTitle = restaurant.title
              .toLowerCase()
              .replace(/ /g, '-')
            return (
              <RestaurantsCard
                key={restaurant.id}
                title={restaurant.title}
                description={restaurant.description}
                image={restaurant.image}
                valuation={restaurant.valuation}
                infos={restaurant.infos}
                to={`/restaurants/${formattedTitle}`}
              />
            )
          })}
        {columns === 'restaurant' &&
          products &&
          products.map((product) => (
            <ProductsCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
      </List>
    </Container>
  )
}
