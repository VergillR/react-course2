/* global test, expect, jest */
import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render expense form with expense data correctly', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />)

  wrapper.find('input').at(0).simulate('change', {
    target: {
      value
    }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set not on textarea change', () => {
  const value = 'Some new text'
  const wrapper = shallow(<ExpenseForm />)

  wrapper.find('textarea').simulate('change', {
    target: {
      value
    }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set to valid amount on change', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value
    }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set invalid amount on change', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value
    }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test('should set new date on date change', () => {
  const time = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('#singleDatePicker').prop('onDateChange')(time)
  expect(wrapper.state('createdAt')).toEqual(time)
})

test('should set calendar focus on focus change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('#singleDatePicker').prop('onFocusChange')({ focused })
  expect(wrapper.state('calendarFocused')).toBe(focused)
})
