import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container, GlobalCss } from './styles'
import Header from './components/Header'
import { ProductsList } from './components/ProductsList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <Container>
          <RouterProvider router={routes} />
        </Container>
      </div>
    </>
  )
}

export default App
