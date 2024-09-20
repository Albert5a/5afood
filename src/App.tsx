import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppContainer, Container, GlobalCss } from './styles'
import Header from './components/Header'
import { ProductsList } from './components/ProductsList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList columns='home' />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <AppContainer>
        <Container>
          <RouterProvider router={routes} />
        </Container>
      </AppContainer>
    </>
  )
}

export default App
