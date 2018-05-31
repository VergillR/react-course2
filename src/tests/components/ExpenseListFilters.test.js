/* global test, expect, jest, beforeEach */
import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { emptyFilters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={emptyFilters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render expenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render expenseListFilters with altData correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

// should handle text change
test('should handle text change', () => {
  const value = 'rent'
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

// should sort by amount
test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount' }
  })
  expect(sortByAmount).toHaveBeenCalled()
})

// should sort by date
test('should sort by date', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'date' }
  })
  expect(sortByDate).toHaveBeenCalled()
})

// should handle date changes
test('should handle date changes', () => {
  const startDate = moment(0)
  const endDate = moment(0).add('5', 'days')
  wrapper.find('#DateRangePicker').prop('onDatesChange')({
    startDate,
    endDate
  })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

// should handle date-calendar focus changes
test('should handle calendar focus changes', () => {
  const focusedInput = 'endDate'
  wrapper.find('#DateRangePicker').prop('onFocusChange')(focusedInput)
  expect(wrapper.state('focusedInput')).toBe(focusedInput)
})

