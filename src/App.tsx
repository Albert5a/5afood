import React from 'react'
import { Container, GlobalCss } from './styles'
import Header from './components/Header'
import CardHome from './components/CardHome'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <Container>
          <CardHome title="Hioki Sushi" />
          <CardHome title="La Dolce Vita Tratoria" />
          <CardHome title="Hioki Sushi" />
          <CardHome title="La Dolce Vita Tratoria" />
          <CardHome title="Hioki Sushi" />
          <CardHome title="La Dolce Vita Tratoria" />
        </Container>
      </div>
    </>
  )
}

export default App
