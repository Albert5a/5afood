import React, { useEffect, useState } from 'react'

import { CardList } from '../../components/CardList'
// import Restaurants from '../../models/Restaurant'

// import pizza from '../../assets/images/pizza.png'

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

// const restaurants: Restaurants[] = [
//   {
//     id: 1,
//     title: 'Hioki Sushi',
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.',
//     image: sushi,
//     valuation: '4,9',
//     infos: ['Destaque da semana', 'Japonesa']
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
//     image: massa,
//     valuation: '4,6',
//     infos: ['Italiana']
//   },
//   {
//     id: 3,
//     title: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
//     image: massa,
//     valuation: '4,6',
//     infos: ['Italiana']
//   },
//   {
//     id: 4,
//     title: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
//     image: massa,
//     valuation: '4,6',
//     infos: ['Italiana']
//   },
//   {
//     id: 5,
//     title: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
//     image: massa,
//     valuation: '4,6',
//     infos: ['Italiana']
//   },
//   {
//     id: 6,
//     title: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
//     image: massa,
//     valuation: '4,6',
//     infos: ['Italiana']
//   }
// ]

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])
  console.log(restaurants)

  return <CardList columns="home" restaurants={restaurants} />
}

export default Home
