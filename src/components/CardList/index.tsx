import React, { useState } from 'react'
import { Container, List } from './styles'
import RestaurantsCard from '../RestaurantsCard'
import ProductsCard from '../ProductsCard'
import ProductModal from '../ProductModal'
import { Restaurants } from '../../pages/Home'

export type Props = {
  columns: 'home' | 'restaurant'
  restaurants?: Restaurants[]
  products?: Restaurants[]
}

export const CardList = ({ columns, restaurants, products }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const getRestaurantTags = (restaurant: Restaurants) => {
    const tags = []

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }

  return (
    <>
      <Container>
        <List columns={columns}>
          {columns === 'home' &&
            restaurants &&
            restaurants.map((restaurant) => {
              const formattedTitle = restaurant.titulo
                .toLowerCase()
                .replace(/ /g, '-')
              return (
                <RestaurantsCard
                  key={restaurant.id}
                  title={restaurant.titulo}
                  description={restaurant.descricao}
                  image={restaurant.capa}
                  valuation={restaurant.avaliacao}
                  infos={getRestaurantTags(restaurant)}
                  to={`/restaurants/${formattedTitle}`}
                />
              )
            })}
          {columns === 'restaurant' &&
            products &&
            products.map((product) => (
              <ProductsCard
                key={product.id}
                title={product.titulo}
                description={product.descricao}
                image={product.capa}
                onClick={() => setModalIsOpen(true)}
              />
            ))}
        </List>
      </Container>
      <ProductModal
        onClick={() =>
          modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
        }
        className={modalIsOpen ? 'visible' : ''}
      />
    </>
  )
}

// Refatorar ProductModal, descomponentizalo para termos um <div .overlay>
