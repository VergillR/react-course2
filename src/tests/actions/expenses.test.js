/* global test, expect */
import configureMockStore from 'redux-mock-store'
import db from '../../firebase/firebase'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([ thunk ])

test('should setup remove expense action object', () => {
  // use toEqual when comparing objects or arrays
  // use toBe when comparing bools, strings, numbers
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should edit expense action object', () => {
  const action = editExpense('123abc', { description: 'Coffee', note: 'Hazelnut' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'Coffee',
      note: 'Hazelnut'
    }
  })
})

test('should setup add expense action object with provided values', () => {
  // const expenseData = {
  //   description: 'Gambling',
  //   note: 'Casino',
  //   amount: 109500,
  //   createdAt: 8000000
  // }
  const actionObj = addExpense(expenses[2])
  expect(actionObj).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Rabbit',
    amount: '122',
    note: 'Cool',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData)).then((data) => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return db.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const defaultExpenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }

  store.dispatch(startAddExpense({})).then((data) => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpenseData
      }
    })

    return db.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpenseData)
    done()
  })
})

// test('should setup default add expense object without any data', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// })

