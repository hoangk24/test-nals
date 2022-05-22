import React, { createContext, useContext } from 'react'

interface ILoadingContext {
  hide: () => void
  show: () => void
}
const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext)
export const useLoading = () => useContext(LoadingContext)

export default function LoadingProvider() {
  return <div>useLoading</div>
}
