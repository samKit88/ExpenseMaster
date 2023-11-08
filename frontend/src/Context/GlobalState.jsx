import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial value
const initialState = {
  transactions: [
    { id: 1, text: 'Food', amount: -20 },
    { id: 2, text: 'Book', amount: -10 },
    { id: 3, text: 'Salary', amount: 200 },
    { id: 4, text: 'Abba', amount: 100 },
  ],
}

// context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
