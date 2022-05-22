import { StoreProvider } from 'app/store'
import LoadingProvider from 'hooks/useLoading'
import React from 'react'
interface Props {
  children: React.ReactNode
}
export default function Compose(props: Props) {
  const { children } = props
  return (
    <>
      {[LoadingProvider, StoreProvider].reduceRight((acc, Comp: any) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
