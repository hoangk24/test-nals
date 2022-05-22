import React, { createContext } from 'react'

interface ILoadingContext {
  hide: () => void
  show: () => void
}
const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext)
export default function useLoading() {
  return <div>useLoading</div>
}
