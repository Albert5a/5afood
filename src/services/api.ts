import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<CheckoutResponse, CheckoutProps>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api

export default api
