import React from 'react'
import questions from '../../data/questions.json'

export default class NewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          questions:questions,
          answer:"answerOne"
        }
        this.updateAnswer = this.updateAnswer.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    updateAnswer(e) {
        let newQuestions =this.state.questions
        newQuestions[e.target.name][this.state.answer]=e.target.value
        this.setState({questions:newQuestions})
        console.log(this.state.answer);
    }
    submitForm(e) {
        this.setState({answer:"answerTwo"})
        e.preventDefault()
        this.render()
        console.log(this.state.answer);
    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                {this.state.questions.map((object, index) => {
                  return(
                <div>
                    <p className="formQuestions">{object.text}</p>
                    <select value="0" name={index} onChange={(e) => this.updateAnswer(e)}>
                      {object.option.map((answer,index) => {
                        return(
                        <option value={index}>{answer}</option>
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
