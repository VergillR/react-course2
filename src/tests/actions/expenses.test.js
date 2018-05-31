/* global test, expect */
import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
  const expenseData = {
    description: 'Gambling',
    note: 'Casino',
    amount: 109500,
    createdAt: 8000000
  }

  const actionObj = addExpense(expenseData)
  expect(actionObj).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: 'Gambling',
      note: 'Casino',
      amount: 109500,
      createdAt: 8000000,
      id: expect.any(String)
    }
  })
})

test('should setup default add expense object without any data', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})

