import React from 'react'

import { CardList } from '../../components/CardList'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import Products from '../../models/Products'

const products: Products[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas',
    image: sushi,
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A Pizza Marguerita leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
  }
]

const Restaurant = () => {
  // const { id } = useParams();
  return (<CardList columns="restaurant" products={products} />)
}

export default Restaurant
