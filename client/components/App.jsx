import React from 'react'
import SimpleForm from './SimpleForm'
import Header from './Header'
import Footer from './Footer'


function sendResults(answers) {
  console.log(answers)
}

const App = () => {
  return (
    <div className = 'container'>
        <Header />
        <h3>The React Form Game </h3>
        <SimpleForm sendResults={sendResults}/>
        <Footer />



    </div>
  )
}

export default App
