import React from "react"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <div className = 'navBar'>
      <ul className = 'links'>
        <li><Link to={'/SimpleForm'}>Game</Link></li>
        <li><Link to={'/Homepage'}>Home</Link></li>
        <li><Link to={'/AddGame'}>Create New Game</Link></li>
      </ul>
    </div>
  )
}

export default NavBar

//need react router to create routes in react. THese are client side routes. THis is the nav bar component with links that take contain pathways to specific components or forms.
