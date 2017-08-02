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

  handleSubmit(e) {
    e.preventDefault();
    this.setState({currentStage:"userTwo"})
    console.log(JSON.stringify(this.state.results))

  }

  updateAnswer(e) {
    let updateResults = this.state.results
    updateResults[this.state.currentStage][e.target.name]=e.target.value
    this.setState({results:updateResults})
    }


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
  // render() {
  //   return (
  //     <form className = "form">
  //       {this.state.questions.map((question, id) => {
  //         return(
  //           <div key={index}>
  //             <p className = "formQuestions">{question.text}</p>
  //             <select name={id} onchange={(e) =>
  //
  //
  //             <button onClick={this.handleSubmit.bind(this)}>Submit</button>
  //             </div>
  //         )
  //       })}
  //         </form>
  //     )
  // }
