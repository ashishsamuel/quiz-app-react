import React, { useContext, useState } from 'react'
import { QuizContext } from '../ContextAPI/Contexts'
import { Questions } from '../ContextAPI/Questions'
import { Col, Row } from 'react-bootstrap'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function QuizScreen() {
    const {gameState,setGameState,result,setResult} = useContext(QuizContext)
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [buttonBgColorOptionA,setButtonBgColorOptionA] = useState('grey')
    const [buttonBgColorOptionB,setButtonBgColorOptionB] = useState('grey')
    const [buttonBgColorOptionC,setButtonBgColorOptionC] = useState('grey')
    const [buttonBgColorOptionD,setButtonBgColorOptionD] = useState('grey')
    const [selectedOption,setSelectedOption] = useState('')
    const [isOptionSelected,setIsSelectedOption] = useState(false)

    const optionClick = (option)=>{
        setSelectedOption(option)
        setIsSelectedOption(true)
        if(option === 'A'){
            setButtonBgColorOptionA('black')
            setButtonBgColorOptionB('grey')
            setButtonBgColorOptionC('grey')
            setButtonBgColorOptionD('grey')
        }else if(option === 'B'){
            setButtonBgColorOptionB('black')
            setButtonBgColorOptionA('grey')
            setButtonBgColorOptionC('grey')
            setButtonBgColorOptionD('grey')
        }else if(option === 'C'){
            setButtonBgColorOptionA('grey')
            setButtonBgColorOptionB('grey')
            setButtonBgColorOptionC('black')
            setButtonBgColorOptionD('grey')
        }else if(option === 'D'){
            setButtonBgColorOptionA('grey')
            setButtonBgColorOptionB('grey')
            setButtonBgColorOptionC('grey')
            setButtonBgColorOptionD('black')
        }
    }

    const nextQuestion = ()=>{
        setButtonBgColorOptionA('grey')
        setButtonBgColorOptionB('grey')
        setButtonBgColorOptionC('grey')
        setButtonBgColorOptionD('grey')
        if(isOptionSelected){
            if(selectedOption === Questions[currentQuestion].answer){
                setResult(result+1)
            }
            setCurrentQuestion(currentQuestion+1)
        }
        else{
            toast.warning("Please select an Option",{
                className: 'toast-message'
              })
        }
        setIsSelectedOption(false)
    }

    const endQuiz = ()=>{
        if(isOptionSelected){
            if(selectedOption === Questions[currentQuestion].answer){
                setResult(result+1)
            }
            setGameState('end')
        }
        else{
            toast.warning("Please select an Option",{
                className: 'toast-message'
              })
        }
    }

    return (
        <>
        <div className='w-100'>
            <h5 className='mt-5 mb-3'>{Questions[currentQuestion].qno}. <span className='ms-1'>{Questions[currentQuestion].question}</span></h5>
            <Row className='questions-section'>
                <Col sm={12} md={6} className='d-grid'>
                    <button onClick={()=>optionClick('A')} className='btn my-2 rounded text-light fw-bold' style={{backgroundColor:buttonBgColorOptionA}}>{Questions[currentQuestion].optionA}</button>
                    <button onClick={()=>optionClick('C')} className='btn my-2 rounded text-light fw-bold' style={{backgroundColor:buttonBgColorOptionC}}>{Questions[currentQuestion].optionC}</button>
                </Col>

                <Col sm={12} md={6} className='d-grid'>
                    <button onClick={()=>optionClick('B')} className='btn my-2 rounded text-light fw-bold' style={{backgroundColor:buttonBgColorOptionB}}>{Questions[currentQuestion].optionB}</button>
                    <button onClick={()=>optionClick('D')} className='btn my-2 rounded text-light fw-bold' style={{backgroundColor:buttonBgColorOptionD}}>{Questions[currentQuestion].optionD}</button>
                </Col>
            </Row>
            <div className='d-flex justify-content-end align-items-center me-5'>
                {currentQuestion === Questions.length-1 ?
                (<button onClick={endQuiz} className='btn btn-success my-4 rounded fw-bold'>Finish Quiz</button>)
                    : (<button onClick={nextQuestion} className='btn btn-dark my-4 rounded fw-bold'>Next Question</button>)
                }
            </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={2000} />
        </>
    )
}

export default QuizScreen