import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink> /&nbsp;
    <NavLink to='/create' activeClassName='is-active' exact>Create Expense</NavLink> /&nbsp;
    <NavLink to='/help' activeClassName='is-active' exact>Help</NavLink>
  </header>
)

export default Header
