import React from 'react'
// import NewForm from './NewForm'
import SimpleForm from './SimpleForm'
import Header from './Header'


function sendResults(answers) {
  console.log(answers)
}

const App = () => {
  return (
    <div className = 'container'>
        <Header />
        <h3>The React Form Game </h3>
        <SimpleForm sendResults={sendResults}/>



    </div>
  )
}

export default App

  // <Footer />
