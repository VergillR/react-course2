// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info is: {props.info}</p>
  </div>
)

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       { props.isAdmin && <p>Admin Warning: This is private info! Do not share!</p> }
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { (props.isAuthenticated) ? (<div><WrappedComponent {...props} /></div>) : <p>You need to be authenticated to view this page.</p> }
    </div>
  )
}

// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated info='these are details' />, document.getElementById('app'))
// ReactDOM.render(<AdminInfo isAdmin info='these are details' />, document.getElementById('app'))
