import React, { Component } from 'react'
import Quiz from './Quiz'
const quiz_question = this.quizData.quiz_question[this.quiz_position - 1]; 

class QuizQuestion extends React.Component {

render() {
    return(
        <main>
        <section>
          <p>{this.props.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>
                {this.props.quiz_question.answer_options[0]}
            </li>
          </ul>
        </section>
      </main>
    )
}
}

export default QuizQuestion