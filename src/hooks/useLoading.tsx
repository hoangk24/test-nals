import Loading from 'components/loading/Loading'
import { PropsWithChildren } from 'constants/models/common.model'
import React, { createContext, useContext, useState } from 'react'

interface ILoadingContext {
  hide: () => void
  show: () => void
}
const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext)
export const useLoading = () => useContext(LoadingContext)

export default function LoadingProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false)
  const showLoading = () => setShow(true)
  const hideLoading = () => setShow(false)
  return (
    <LoadingContext.Provider
      value={{
        show: showLoading,
        hide: hideLoading,
      }}
    >
      {children}
      {show && <Loading />}
    </LoadingContext.Provider>
  )
}
