import { useState } from 'react'
//components
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionHistory from './components/TransactionHistory'
// import AddTransaction from './components/AddTransaction'

const App = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }
  console.log('Input value', inputValue)

  return (
    <div>
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
              <input type="text" value={inputValue} onChange={handleInput} />
            </label>
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" placeholder="Enter Amount" />
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default App
