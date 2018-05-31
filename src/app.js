/* eslint-disable react/prop-types */
// to autostyle with StandardJS: shift+F1
// React-Components moeten render() implementeren
// import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import * as expenses from './actions/expenses'
// import * as filters from './actions/filters'
import selector from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.subscribe(() => {
  const state = store.getState()
  const visibleSelection = selector(state.expenses, state.filters)
  console.log(visibleSelection)
})

store.dispatch(expenses.addExpense({ description: 'Water Bill', amount: 180, createdAt: 1250 }))
store.dispatch(expenses.addExpense({ description: 'Gas Bill', amount: 450, createdAt: 8111331380 }))
store.dispatch(expenses.addExpense({ description: 'Rent', amount: 5000, createdAt: 100 }))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
