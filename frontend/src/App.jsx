import { useState } from 'react'
//components
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionHistory from './components/TransactionHistory'
// import AddTransaction from './components/AddTransaction'

import { GlobalProvider } from './Context/GlobalState'

const App = () => {
  const [type, setType] = useState('')
  const [amount, setAmount] = useState('')

  const handleType = (event) => {
    setType(event.target.value)
  }
  const handleAmount = (event) => {
    setAmount(event.target.value)
  }

  return (
    <GlobalProvider>
      <Header />
      <div>
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        {/* <AddTransaction inputValue handleInput={handleInput} /> */}
        <form>
          <div>
            <label>
              Type:
              <input
                type="text"
                value={type}
                placeholder="enter text"
                onChange={handleType}
              />
            </label>
          </div>
          <div>
            <label>
              Amount:
              <input type="number" value={amount} onChange={handleAmount} />
            </label>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    </GlobalProvider>
  )
}

export default App
