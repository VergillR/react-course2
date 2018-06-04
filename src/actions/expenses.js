// import uuid from 'uuid'
import db from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', note = '', amount = 0, createdAt = 0
    } = expenseData
    const newExpense = { description, note, amount, createdAt }

    return db.ref('expenses').push(newExpense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...newExpense
      }))
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id = '' } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
export const editExpense = (id = '', updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

