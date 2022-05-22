import { PropsWithChildren } from 'constants/models/common.model'
import { createContext, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface IToast {
  success: (message: string) => void
  error: (message: string) => void
  warring: (message: string) => void
}
const ToastContext = createContext<IToast>({} as IToast)
export const useToast = () => useContext(ToastContext)

export default function ToastProvider({ children }: PropsWithChildren) {
  return (
    <ToastContext.Provider
      value={{
        success: (message: string) => toast.success(message),
        error: (message: string) => toast.error(message),
        warring: (message: string) => toast.warning(message),
      }}
    >
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}
