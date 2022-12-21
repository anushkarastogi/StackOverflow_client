import React, {useState} from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import moment from "moment"
import upvote from "../../images/sort-up-solid.svg"
import downvote from "../../images/sort-down-solid.svg"
import './Questions.css'
import Avatar from "../../components/Avatar/Avatar"
import { useSelector, useDispatch } from 'react-redux'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion } from "../../actions/question"
const QuestionsDetails = () => {
    const { id } = useParams()
    //console.log(id)
    const QuestionsList = useSelector(state => state.questionsReducer)
    /*var QuestionsList=[{
        _id: '1',
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
        _id: '2',
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
        _id: '3',
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

    const [Answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    const url = 'http://localhost:3000'

    const handlePostAns = (e, answerLength) =>{
      e.preventDefault()
      if(User === null){
          alert('Login or Signup to answer a question')
          Navigate('/Auth')
      }else{
          if(Answer === ''){
              alert('Enter an answer before submitting')
          } else{
              dispatch(postAnswer(id,{ noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User?.result?.name, userId: User?.result?._id }))
          }
      }
  }
  const handleShare = () =>{
    copy(url+location.pathname)
    alert('Copied url: '+url+location.pathname)
  }

  const handleDelete = () =>{
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleUpVote = () =>{
    dispatch(voteQuestion(id, 'upVote', User.result._id))
  }

  const handleDownVote = () =>{
    dispatch(voteQuestion(id, 'downVote', User.result._id))
  }

  return (
    <div className="questions-detail-page">
    {
        QuestionsList.data === null?
        <h1>Loading..</h1>:
        <>
            {
                QuestionsList.data.filter(question => question._id === id).map(question =>(
                  
                    <div key={question._id}>
                    
                        <section className="question-details-container">
                            <h1>{question.questionTitle}</h1>
                            <div className="question-details-container-2">
                                <div className="question-votes">
                                <img src={upvote} alt="" width='18' className='votes-icon' onClick={handleUpVote}/>
                                <p>{question.upVote.length - question.downVote.length}</p>
                                <img src={downvote} alt="" width='18' className='votes-icon' onClick={handleDownVote}/>
                            </div>
                                <div style={{width: '100%'}}>
                                    <p className="question-body">{question.questionBody}</p>
                                    <div className="question-details-tags">
                                      {
                                        question.questionTags.map((tag)=>(
                                          <p key={tag}>{tag}</p>
                                        ))
                                      }
                                    </div>
                                    <div className="question-action-user">
                                      <div>
                                        <button type="button" onClick={handleShare}>Share</button>
                                        {
                                          User?.result?._id === question?.userId && (
                                            <button type="button" onClick={handleDelete}>Delete</button>
                                          )
                                        }
                                
                                      </div>
                                      <div>
                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                        <Link to={`/Users/${question.userId}`} className="user-link" style={{color: "#0086d8"}}>
                                          <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                          <div>
                                            {question.userPosted}
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                          question.noOfAnswers !==0 && (
                            <section>
                              <h3>{question.noOfAnswers} Answers</h3>
                              <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                            </section>
                          )
                        }
                        <section className="post-ans-container">
                          <h3>Your Answer</h3>
                          <form onSubmit={ (e) => { handlePostAns(e, question.answer.length) }}>
                            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea><br />
                            <button type="submit" className='post-ans-btn' children='Post Your Answer'/>
                          </form>
                          <p>
                            Browse other Tagged Questions
                            {
                              question.questionTags.map((tag)=>(
                                <Link to="/Tags" key={tag} className="ans-tags">{tag}</Link>
                              ))
                            } or
                            <Link to="/AskQuestion" style={{textDecoration: "none", color: "#009dff"}}>Ask Your Own Question</Link>
                          </p>
                        </section>
                    </div>
                ))
            }
        </>

    }
    </div>
  )
}
export default QuestionsDetails