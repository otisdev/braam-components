import React from 'react'

export type SummaryProps = {
  children : typeof React.Children;
}

const CartSummary = ({children}: SummaryProps) => {

   

  return (
    <div>CartSummary</div>
  )
}

export default CartSummary