/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import visibleExpenses from '../../selectors/expenses'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import moment from 'moment'

const emptyFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const altFilters = {
  text: 't',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
}

test('should show all expenses with empty filters', () => {
  const wrapper = shallow(<ExpensesSummary selection={visibleExpenses(expenses, emptyFilters)} />)
  expect(wrapper).toMatchSnapshot()
})

test('should only show valid expenses with alt filters', () => {
  const wrapper = shallow(<ExpensesSummary selection={visibleExpenses(expenses, altFilters)} />)
  expect(wrapper).toMatchSnapshot()
})
