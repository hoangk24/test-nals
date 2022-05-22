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
  const [show, setShow] = useState(false)
  return <LoadingContext.Provider value={}>{children}</LoadingContext.Provider>
}
