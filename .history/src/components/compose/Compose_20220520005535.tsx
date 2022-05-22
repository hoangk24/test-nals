import { StoreProvider } from 'app/store'
import PaypalProvider from 'components/paypal/PaypalProvider'
import CartProvider from 'hook/useCart'
import CategoryProvider from 'hook/useCategory'
import LoadingProvider from 'hook/useLoading'
import NsxProvider from 'hook/useNSX'
import ProductProvider from 'hook/useProduct'
import SocketProvider from 'hook/useSocket'
import VoucherProvider from 'hook/useVoucher'
import DiscountProvider from 'pages/admin/discount/useDiscount'
import React from 'react'
interface Props {
  children: React.ReactNode
}
export default function Compose(props: Props) {
  const { children } = props

  return (
    <>
      {[].reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
