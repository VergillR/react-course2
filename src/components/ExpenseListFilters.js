import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
  state = {
    focusedInput: null
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }

  onSortChange = (e) => {
    (e.target.value === 'date') ? this.props.sortByDate() : this.props.sortByAmount()
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = focusedInput => this.setState({ focusedInput })

  render () {
    return (
    <div>
    <input type='text' value={this.props.filters.text} onChange={this.onTextChange} />
    <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
    <DateRangePicker
    id='DateRangePicker'
    numberOfMonths={1}
    isOutsideRange={() => false}
    showClearDates={true}
    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
    onDatesChange={this.onDatesChange}
    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
    />
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
