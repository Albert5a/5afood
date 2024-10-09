import React, { useEffect, useState } from 'react'

import { CardList } from '../../components/CardList'

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
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))

    // posso fazer mais requisições aqui
    // fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    //   .then((res) => res.json())
    //   .then((res) => setRestaurants(res))
  }, [])

  return <CardList columns="home" restaurants={restaurants} />
}

export default Home
