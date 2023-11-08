import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext)
  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {' '}
            {t.text}{' '}
            <span>
              {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}
            </span>
            <button onClick={() => deleteTransaction(t.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TransactionHistory
