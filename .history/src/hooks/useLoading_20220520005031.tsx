import React, { createContext } from 'react'

interface ILoadingContext {
  hide: () => void
}
const LoadingContext = createContext()
export default function useLoading() {
  return <div>useLoading</div>
}
