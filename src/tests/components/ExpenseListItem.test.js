/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'

test('should render expense list item with expenses[0] data', () => {
  const exp = expenses[0]
  const wrapper = shallow(<ExpenseListItem {...exp} />)
  expect(wrapper).toMatchSnapshot()
})

