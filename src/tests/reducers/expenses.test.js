/* global test, expect */
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }

  const state = expensesReducer(expenses, action)

  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }

  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

// should add expense
test('should add expense with valid data', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Cookie',
      note: 'Chocolate',
      amount: 300,
      createdAt: moment()
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ ...expenses, action.expense ])
})

// should edit expense
test('should edit expense with valid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'Ice Tea',
      note: 'Changed Tea to Ice Tea',
      amount: 2200,
      createdAt: moment()
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], { id: action.id, ...action.updates }, expenses[2] ])
})
// should not edit expense if expense not found
test('should not edit expense when id is not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-2',
    updates: {
      description: 'Ice Tea',
      note: 'Changed Tea to Ice Tea',
      amount: 2200,
      createdAt: moment()
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
