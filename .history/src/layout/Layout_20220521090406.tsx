import { PropsWithChildren } from 'constants/models/common.model'
import Header from 'layout/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
