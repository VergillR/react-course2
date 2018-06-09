/* global test, expect, jest, beforeEach */

import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
  startEditExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} expense={expenses[0]} history={history} />)
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle the function StartEditExpense correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

test('should handle the function StartRemoveExpense correctly', () => {
  wrapper.find('button').prop('onClick')()
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0])
})
