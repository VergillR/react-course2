// Export a stateless functional component
// description, amount, createdAt
import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <h2>Expense</h2>
    <Link to={'/edit/' + id}><h3>Description: {description}</h3></Link>
    <p>Amount: {amount}</p>
    <p>createdAt: {createdAt}</p>
  </div>
)

export default ExpenseListItem
