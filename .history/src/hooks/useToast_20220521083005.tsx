import { PropsWithChildren } from 'constants/models/common.model'
import { createContext, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// interface IToast{
// }
const ToastContext = createContext({})
export const useToast = () => useContext(ToastContext)

export default function ToastProvider({ children }: PropsWithChildren) {
  return (
    <ToastContext.Provider
      value={{
        success: (message) => toast.success(mes),
      }}
    >
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}
