import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'

class QuizEnd extends React.Component {
    render() {
        return(
            <div>
                <QuizQuestion/>
            <p>Thanks for playing!</p>
            <a href=''>Reset Quiz</a>
          </div>
        )
    }
}

export default QuizEnd