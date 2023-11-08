import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((t) => t.amount)
  const totalAmount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  return (
    <>
      <h3>Your Balance</h3>
      <h2>${totalAmount}</h2>
    </>
  )
}

export default Balance
