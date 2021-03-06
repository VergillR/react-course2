/* global test, expect */
// import React from 'react'
// import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import getExpensesTotal from '../../selectors/expenses-total'

test('should return 0 if no expenses', () => {
  const result = getExpensesTotal()
  expect(result).toBe(0)
})

test('should correctly add up a single expense', () => {
  const result = getExpensesTotal([ expenses[0] ])
  expect(result).toBe(expenses[0].amount)
})

test('should correctly add multiple expenses', () => {
  const exp = expenses.map((item) => {
    return item.amount
  })
  const result = getExpensesTotal(expenses)
  expect(result).toBe(exp.reduce((accumulator, current) =>
    accumulator + current))
})
