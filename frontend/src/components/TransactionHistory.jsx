import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {' '}
            {t.text} and {t.amount}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TransactionHistory
