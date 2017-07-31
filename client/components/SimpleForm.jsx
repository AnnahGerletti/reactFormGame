import React from 'react'
import questions from '../../data/questions.json'

export default class SimpleForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      answers: {}
    }
  }

  handleSubmit(e) {
    this.props.sendResults(this.state.answers)
  }

  render() {
    return (<div>
      SimpleForm
      <button onClick={this.handleSubmit.bind(this)}>Submit</button>
    </div>)
  }

}
//figure out how to create two forms after player one hits submit the answers populate the object and the the simpleform is rendered again. Or have two forms with the first submit the form2 can be rendered. Then after the submit is clicked twice the results apear on a new page.
//make simple form like new form, get it to populate the obj, send this.state.answers when submit is hit.
//could also pull out answers and put them into thier own obj. 
