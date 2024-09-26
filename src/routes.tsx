import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/la-dolce-vita-trattoria" element={<Restaurant />} />
    <Route path="/hioki-sushi" element={<Home />} />
  </Routes>
)


export default Pages
