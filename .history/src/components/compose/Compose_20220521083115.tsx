import { StoreProvider } from 'app/store'
import LoadingProvider from 'hooks/useLoading'
import ToastProvider from 'hooks/useToast'
import React from 'react'
interface Props {
  children: React.ReactNode
}
export default function Compose(props: Props) {
  const { children } = props
  return (
    <>
      {[LoadingProvider, StoreProvider, ToastProvider].reduceRight((acc, Comp: any) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
