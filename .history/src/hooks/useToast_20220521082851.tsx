import { PropsWithChildren } from 'constants/models/common.model'
import { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastContext = createContext({})
export const useContext = () => useContext(ToastContext)

export default function ToastProvider({ children }: PropsWithChildren) {
  return (
    <>
      children
      <ToastContainer />
    </>
  )
}
