import Detail from 'pages/details/Detail'
import Home from 'pages/home/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='blog'>
            <Route path=':teamId' element={<Team />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
