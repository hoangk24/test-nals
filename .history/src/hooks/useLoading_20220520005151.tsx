import React, { createContext, useContext } from 'react'

interface ILoadingContext {
  hide: () => void
  show: () => void
}
const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext)
export const useLoading = () => useContext(LoadingContext)
interface Props {
  children: React.ReactNode
}
export default function LoadingProvider({ children }: Props) {
  return <LoadingContext.Provider>{children}</LoadingContext.Provider>
}
