import React from 'react'
import SimpleForm from './SimpleForm'
import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'


function sendResults(answers) {
  console.log(answers)
}

const App = () => {
  return (
    <div className ='container'>
      <div className='navBar'>
        <NavBar />
      </div>
      <div className='questionForm'>
        <Header />
        <SimpleForm sendResults={sendResults}/>
        <Footer />
      </div>
    </div>
  )
}

export default App
