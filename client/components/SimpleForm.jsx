import React from 'react'
import questions from '../../data/questions.json'
import Question from './Question'

export default class SimpleForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            questions: questions,
            results: {
                userOne: {},
                userTwo: {}
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
        const nextStage = this.state.currentStage == "userOne" ? "userTwo" : "results"
        this.setState({currentStage: nextStage})



    }

    /* the event provides e.target, which has "name" (name of HTML element)
  and "value" (whatever the element's value is)

  we copy the existing results into a temporary variable (updateResults)
  we descend into this copy using the currentStage and the <Select> element's name to give it a value

  we then update the existing results using setState with our temporary
  updated results. As setState merges, rather than overwrites, this is fine.
  */
    updateAnswer(e) {
      console.log(e.target.value)
        let updateResults = this.state.results
        updateResults[this.state.currentStage][e.target.name] = e.target.value
        this.setState({results: updateResults})
    }

    resultFor(question_idx) {
      const answers = this.state.results[this.state.currentStage]
      return answers[question_idx] ? answers[question_idx] : ""
    }
    /* on render, draw the question form if currentStage is either userOne
    or userTwo.

    pullered out question <div> from the render and turned it into a component, make sure you include all the things the componet needs inside the render function.


TODO:
  Not handling rendering the answer yet via an else. Refer to handleSubmit()
*/
    render() {
            if(this.state.currentStage == 'userOne' || this.state.currentStage == 'userTwo') {
                return (
                    <form onSubmit={this.handleSubmit}>
                        {this.state.questions.map((question, index) => (
                         <Question key={index}
                            result={this.resultFor(index)}
                            question={question}
                            updateAnswer={this.updateAnswer.bind(this)}
                            index={index}
                          />
                        ))}
                        <hr/>
                        <input className="submitButton" type="submit" value="Push Me"/>
                    </form>
                )

            }
            else{
              console.log(this.state.results);
              console.log(this.state.questions);
              return(
                <div>
                  <h2>Player Results</h2>
                  <div>
                    {this.state.questions.map((question, index) => {
                      let userOneChoice = this.state.results.userOne[index]
                      let userTwoChoice = this.state.results.userTwo[index]
                      return (
                        <div>
                          <p className="resultQuestions">{question.text}</p>
                          <p>
                            Player One said: {question.option[userOneChoice]}
                            {(question.correct == userOneChoice)
                              ? '- ✓'
                              : '- ✘'}
                          </p>
                          <p>
                            Player Two said: {question.option[userTwoChoice]}
                            {(question.correct == userTwoChoice)
                              ? '- ✓'
                              : '- ✘'}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>)

            }
        }
}
