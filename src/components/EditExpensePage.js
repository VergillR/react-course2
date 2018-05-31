/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = (expense) => {
      props.editExpense(props.expense.id, expense)
      props.history.push('/')
    }
    this.onClick = (e) => {
      props.removeExpense({id: props.expense.id})
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
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
