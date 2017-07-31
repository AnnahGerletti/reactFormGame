import React from 'react'
import questions from '../../data/questions.json'

export default class NewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          questions:questions,
          answerOne: {},
          answerTwo: {},
          answer:"answerOne"
        }
        this.updateAnswer = this.updateAnswer.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    updateAnswer(e) {
        let newQuestions =this.state.questions

        let id = newQuestions[e.target.name].id
        let oldAnswers = this.state[this.state.answer]
        let newAnswers = {...oldAnswers, [id]: e.target.value}
        this.setState({
          [this.
        newQuestions[e.target.name][this.state.answer]=e.target.value
        this.setState({questions:newQuestions})
        console.log(this.state.answer);
    }
    submitForm(e) {
        this.setState({answer:"answerTwo"})
        e.preventDefault()
        this.props.handleSubmit(this.state.answers)
        this.render()
        console.log(this.state.answer);
    }
    valueForQuestion(question) {
      var answers = handleSubmitthis.state[this.state.answer]
      return answers[question.id]
    }
    render() {
      console.log(this.state)
        return (
            <form onSubmit={this.submitForm}>
                {this.state.questions.map((question, index) => {
                  return(
                <div key={index}>
                    {this.valueForQuestion(question)}
                    <p className="formQuestions">{question.text}</p>
                    <select value={this.valueForQuestion(question)} name={index} onChange={(e) => this.updateAnswer(e)}>
                      {question.option.map((answer,index) => {
                        return(
                        <option key={index} value={index} >{answer}</option>
                        )
                      })}
                    </select>
                </div>
                  )
                })}
                 <input className="submitButton" type="submit" />
            </form>
        )
    }
}

// <input name="name" placeholder="name" type="text" onChange={(e) => this.updateNewCatDetails(e)}/>
// <input name="age" placeholder="age" type="text" onChange={(e) => this.updateNewCatDetails(e)}/>
// <input name="colour" placeholder="colour" type="text" onChange={(e) => this.updateNewCatDetails(e)}/>
// <select name="isAlive" onChange={(e) => this.updateNewCatDetails(e)}>
//   <option selected disabled>Does this exist?</option>
//   <option value={true}>Ye</option>
//   <option value={false}>Neh</option>
// </select>
// <input type="submit" />
// <p>{this.state.newCat.name}</p>

// let newCat = this.state.newCat
// newCat[e.target.name] = e.target.value
// //do something
// this.setState({newCat: newCat})
//
// e.preventDefault()
// console.log({e});
// console.log("the cat is", this.state.newCat);
