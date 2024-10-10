import React from 'react'

import { CardList } from '../../components/CardList'

import { useGetRestaurantsQuery } from '../../services/api'

export interface Product {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Product[]
}
const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return <h3>Carregando...</h3>
  }

  return <CardList columns="home" restaurants={restaurants} />
}

export default Home
