import Layout from 'layout/Layout'
import Login from 'pages/auth/login/Login'
import Register from 'pages/auth/register/Register'
import Detail from 'pages/details/Detail'
import Home from 'pages/home/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog'>
            <Route path=':id' element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
