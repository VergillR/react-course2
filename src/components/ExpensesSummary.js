import React from 'react'
import { connect } from 'react-redux'
import getTotalExpenses from '../selectors/expenses-total'
import visibleExpenses from '../selectors/expenses'
import numeral from 'numeral'

// load a locale
numeral.register('locale', 'nl-nl', {
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
numeral.locale('nl-nl')

export class ExpensesSummary extends React.Component {
  /*
  Viewing { visibleExpenses(this.props.expenses, this.props.filters).length } expense(s) totalling { numeral(getTotalExpenses(visibleExpenses(this.props.expenses, this.props.filters)) / 100).format('$0,0.00') }

*/

  render () {
    return (
      <div>
        <p>
          Viewing { this.props.selection.length } { this.props.selection.length === 1 ? 'expense' : 'expenses' } totalling { numeral(getTotalExpenses(this.props.selection) / 100).format('$0,0.00') }
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  selection: visibleExpenses(state.expenses, state.filters)
})

const mapDispatchToProps = (dispatch, props) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesSummary)
