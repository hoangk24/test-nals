import Register from 'pages/auth/register/Register'
import Detail from 'pages/details/Detail'
import Home from 'pages/home/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='register' element={<Register />} />
          <Route path='blog'>
            <Route path=':id' element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
