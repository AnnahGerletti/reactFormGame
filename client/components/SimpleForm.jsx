import React from 'react'
import questions from '../../data/questions.json'

export default class SimpleForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      questions: questions,
      results: {
        userOne:{},
        userTwo:{}
      },
      currentStage: "userOne"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  /* this only prevents the form from doing it's usual submit
  and changes currentStage to "userTwo".

  TODO:
  * must reset <submit> elements to default values somehow
  * if currentStage already 'userTwo', then should be changed to an
    answer state to allow for drawing the answer form on render
  */

  handleSubmit(e) {
    e.preventDefault();
    this.setState({currentStage:"userTwo"})
    console.log(JSON.stringify(this.state.results))

  }

  /* the event provides e.target, which has "name" (name of HTML element)
  and "value" (whatever the element's value is)

  we copy the existing results into a temporary variable (updateResults)
  we descend into this copy using the currentStage and the <Select> element's name to give it a value

  we then update the existing results using setStage with our temporary
  updated results. As setState merges, rather than overwrites, this is fine.
  */
  updateAnswer(e) {
    let updateResults = this.state.results
    updateResults[this.state.currentStage][e.target.name]=e.target.value
    this.setState({results:updateResults})
    }

/* on render, draw the question form if currentStage is either userOne
or userTwo.

TODO:
  Not handling rendering the answer yet via an else. Refer to handleSubmit()
*/
  render() {
    {if (this.state.currentStage == 'userOne' || 'userTwo') {
      return (
          <form onSubmit={this.handleSubmit}>
              {this.state.questions.map((question, index) => {
                return(
              <div key={index}>
                  <p className="formQuestions">{question.text}</p>
                  <select name={index} onChange={(e) => this.updateAnswer(e)}>
                    {question.option.map((answer,index) => {
                      return(
                      <option key={index} value={index} >{answer}</option>
                      )
                    })}
                  </select>
              </div>
                )
              })}
              <hr />
               <input className="submitButton" type="submit" value="Push Me"/>
          </form>
      )

    }}

  }
}
