import React, { createContext, useContext, useState } from 'react'

interface ILoadingContext {
  hide: React.Dispatch<React.SetStateAction<boolean>>
  show: React.Dispatch<React.SetStateAction<boolean>>
}
const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext)
export const useLoading = () => useContext(LoadingContext)
interface Props {
  children: React.ReactNode
}
export default function LoadingProvider({ children }: Props) {
  const [show, setShow] = useState(false)
  return <LoadingContext.Provider value={}>{children}</LoadingContext.Provider>
}
