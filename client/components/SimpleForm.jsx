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
