import React from 'react'
import Questions from "./Questions"
const QuestionList = ({QuestionsList}) => {
  return (
    <>
        {
            QuestionsList.map((question) => (
                <Questions question={question} key={question._id}/>
            ))
        }
    </>
)
}

export default QuestionList