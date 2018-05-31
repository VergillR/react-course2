import { createStore } from 'redux'

// Action Generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ setTo = 0 } = {}) => ({
  type: 'SET',
  setTo
})

const resetCount = () => ({
  type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.setTo
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

store.subscribe(() => {
  console.log(store.getState())
})

// Increment the count
store.dispatch(incrementCount({ incrementBy: 6 }))
store.dispatch(incrementCount())

// Reset the count to 0
store.dispatch(resetCount())

store.dispatch(setCount({ setTo: 32 }))

store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 151 }))
