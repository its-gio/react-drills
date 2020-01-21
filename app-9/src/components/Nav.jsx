import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <h1>Logo</h1>
        </Link>

        <ul>
          <Link to="/signup">
            <li>signup</li>
          </Link>

          <Link to="details">
            <li>details</li>
          </Link>
        </ul>
      </nav>
    )
  }
}
