import React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header'
import HeaderStore from './components/HeaderStore'
import Pages from './routes'
import Footer from './components/Footer'

const HeaderLayout = () => {
  const location = useLocation()

  return <>{location.pathname === '/' ? <Header /> : <HeaderStore />}</>
}

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <HeaderLayout />
      <div>
        <Pages />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
