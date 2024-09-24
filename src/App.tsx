import React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppContainer, Container, GlobalCss } from './styles'
import Header from './components/Header'
import HeaderStore from './components/HeaderStore'
import Pages from './routes'

const HeaderLayout = () => {
  const location = useLocation()

  return <>{location.pathname === '/' ? <Header /> : <HeaderStore />}</>
}

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <HeaderLayout />
      <AppContainer>
        <Container>
          <Pages />
        </Container>
      </AppContainer>
    </BrowserRouter>
  )
}

export default App
