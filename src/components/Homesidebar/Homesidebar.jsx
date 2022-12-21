import React from 'react'
import "./Homesidebar.css"
import { useSelector } from "react-redux"
import { useLocation, useNavigate} from "react-router-dom"
import QuestionList from './QuestionList'
const Homesidebar = () => {

  const location=useLocation()
  const user =1
  const navigate=useNavigate()

  const QuestionsList= useSelector(state => state.questionsReducer)
  //console.log(QuestionsList)
  /*var QuestionsList=[{
    _id: 1,
    upVotes: 3,
    downVotes:3,
    noOfAnswers: 2,
    questionTitle: "What is function?",
    questionBody: "It meant to be",
    questionTags: ["java", "nodejs", "reactjs", "mongodb"],
    userPosted: "mano",
    userId:1,
    askedOn: "jan 1",
    answer: [{
      answerBody:"Answer",
      userAnswered: "Kumar",
      answeredOn: "Jan 2",
      userId: 2
    }]
  },{
    _id: 2,
    upVotes: 1,
    downVotes:0,
    noOfAnswers: 0,
    questionTitle: "what is javascript?",
    questionBody: "It meant to be",
    questionTags: ["java", "react", "C"],
    userPosted: "mano",
    userId:3,
    askedOn: "jan 1",
    answer: [{
      answerBody:"Answer",
      userAnswered: "Ajay",
      answeredOn: "April 7",
      userId: 1
    }]

  },{
    _id: 3,
    upVotes: 5,
    downVotes:2,
    noOfAnswers: 0,
    questionTitle: "How to run server on reactjs?",
    questionBody: "It meant to be",
    questionTags: ["java", "nodejs", "reactjs", "mongodb"],
    userPosted: "mano",
    userId:2,
    askedOn: "jan 1",
    answer: [{
      answerBody:"Answer",
      userAnswered: "Riya",
      answeredOn: "December 9",
      userId: 3
    }]
  }] */
  

   const checkAuth=()=>{
        if(user === null){
          alert("login or signup to ask question")
          navigate("/Auth")
        }
        else{
          navigate("/AskQuestion")
        }
    }
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {
          location.pathname==="/" ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className="ask-btn">Ask Question</button>
      </div>
      <div>
                {
                    QuestionsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{ QuestionsList.data.length } questions</p>
                        <QuestionList QuestionsList={QuestionsList.data} />
                    </>
                }
            </div>
    </div>
  )
  }
export default Homesidebar