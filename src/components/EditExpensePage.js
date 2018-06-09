/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = (expense) => {
      props.startEditExpense(props.expense.id, expense)
      props.history.push('/')
    }
    this.onClick = (e) => {
      props.startRemoveExpense(props.expense)
      props.history.push('/')
    }
  }

  render () {
    return (
      <div>
        <h3>Edit Expense</h3>
        <ExpenseForm expense={this.props.expense} onSubmit={(this.onSubmit)} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  // use props of the component itself to check what it needs from Redux store
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (exp) => dispatch(startRemoveExpense(exp))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
