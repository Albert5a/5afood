import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurants/:id" element={<Restaurant />} />
    <Route path="/restaurants/:id" element={<Restaurant />} />
  </Routes>
)

// la-dolce-vita-trattoria hioki-sushi
export default Pages
