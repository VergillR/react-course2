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

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

// export const startSetExpenses
// 1. fetch all expense data now
// 2. parse that data into an array
// 3. dispatch SET_EXPENSES
export const startSetExpenses = () => {
  return (dispatch) => {
    return db.ref('expenses').once('value', (snapshot) => {
      const temp = []
      snapshot.forEach((childSnapshot) => {
        temp.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setExpenses(temp))
    })
  }
}

export const startRemoveExpense = (exp = {}) => {
  return (dispatch) => {
    return db.ref(`expenses/${exp.id}`).remove().then(() => {
      dispatch(removeExpense(exp))
    }).catch((err) => {
      console.log(err)
    })
  }
}
