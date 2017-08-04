import React from 'react'
import SimpleForm from './SimpleForm'
import Header from './Header'
import NavBar from './NavBar'
import AddGame from './AddGame'
import Homepage from './Homepage'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div className='container'>

                <div className='navBar'>
                    <Header/>
                    <NavBar/>
                </div>
                <Route path='/SimpleForm' render={() => (
                    <div className='questionContainer'>
                        <SimpleForm/>
                    </div>
                )}/>
                <Route path='/AddGame' component={AddGame}/>
                <Route path='/Homepage' component={Homepage}/>
            </div>
        </Router>
    )
}

export default App
//render these compt need if the path matches draw the compt, th <Router has path then renders the compt. App id were the main parts of react are rendered and created. they need to be incased inside of a <Router> tags. 'path' is the url path it takes.
