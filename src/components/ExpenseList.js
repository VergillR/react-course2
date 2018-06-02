import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import selectTotalExpenses from '../selectors/expenses-total'
import numeral from 'numeral'

// switch between locales
numeral.locale('nl')

export const ExpenseList = (props) => (
  <div>
    { props.expenses.length === 0 ? <p>No expenses found</p> : props.expenses.map((expense) => <ExpenseListItem {...expense} key={expense.id} />) }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    totalExpenses: selectTotalExpenses(state.expenses)
  }
}

export default connect(mapStateToProps)(ExpenseList)
