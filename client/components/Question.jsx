import React from 'react'


const Question = ({result, question, updateAnswer, index}) => {
  return(
    <div>
        <p className="formQuestions">{question.text}</p>
        <select value={result} name={index} onChange={updateAnswer}>
            {question.option.map((answer, index) => {
                return (
                    <option key={index} value={index}>{answer}</option>
                )
            })}
        </select>
    </div>
  )
}
export default Question
