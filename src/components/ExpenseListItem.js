// Export a stateless functional component
// description, amount, createdAt
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

// load a locale
numeral.register('locale', 'nl', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'mln',
    billion: 'mrd',
    trillion: 'bln'
  },
  ordinal: function (number) {
    var remainder = number % 100
    return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de'
  },
  currency: {
    symbol: '€ '
  }
})

// switch between locales
numeral.locale('nl')

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <h2>Expense</h2>
    <Link to={'/edit/' + id}><h3>Description: {description}</h3></Link>
    <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
    <p>CreatedAt: {moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
)

export default ExpenseListItem
