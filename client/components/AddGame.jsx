import React from 'react'


export default class AddGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newGame: {}
        }
        this.updateNewGame = this.updateNewGame.bind(this)
        this.submitGame = this.submitGame.bind(this)
    }

    updateNewGame(e) {
        let newGame = this.state.newGame
        newGame[e.target.name] = e.target.value
        //do something
        this.setState({newGame: newGame})
    }
    submitGame(e) {
        e.preventDefault()
        console.log({e});
        console.log("this is a new game", this.state.newGame);
    }

    //event functions go here.
    //event handlers go in the render function
    render() {
        return (
            <form onSubmit={this.submitGame}>
                <div className="newGame">
                    <p>Choose your catagory then write questions about that topic.</p>
                    <select name="category" onChange={(e) => this.updateNewGame(e)}>
                      <option selected disabled>Pick a Category</option>
                        <option value="art">Art</option>
                        <option value="sports">Sports</option>
                        <option value="places">Places</option>
                    </select>
                    <input type="submit" />
                </div>

            </form>
        )

    }
}

//selected disabled-without this the first category cant be selected and react won't recognize that it was selected.
//this is a statefull compoent that is the start of the create your own game. THere are four parts. 1.the state  at the top where you set your props. 2. the render part that holds the event handlers 3. the function that calls the event and 4. the function that does something with your page. here we are submitting the form.
