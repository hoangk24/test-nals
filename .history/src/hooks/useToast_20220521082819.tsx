import { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastContext = createContext({})
export const useContext = () => useContext(ToastContext)

export default function useToast() {
  return <div>useToast</div>
}
