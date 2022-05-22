import { PropsWithChildren } from 'constants/models/common.model'
import Header from 'layout/Header'
import React from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
    </div>
  )
}
