import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header'
import HeaderStore from './components/HeaderStore'
import Pages from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

const HeaderLayout = () => {
  const location = useLocation()

  return <>{location.pathname === '/' ? <Header /> : <HeaderStore />}</>
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Cart />
        <HeaderLayout />
        <div>
          <Pages />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
