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
