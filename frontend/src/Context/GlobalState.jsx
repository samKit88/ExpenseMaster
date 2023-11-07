import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial value
const initialState = {
  transactions: [
    { id: 1, text: 'Food', amount: -20 },
    { id: 2, text: 'Book', amount: -10 },
    { id: 3, text: 'Salary', amount: 200 },
  ],
}

// context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
