import React, { useContext } from 'react'
import { QuizContext } from '../ContextAPI/Contexts'
import { Questions } from '../ContextAPI/Questions'
import '../App.css'

function EndGameScreen() {
    const {setGameState,name,setName,result,setResult} = useContext(QuizContext)

    const restartGame = ()=>{
        setGameState('start')
        setName('')
        setResult(0)
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center endscreen-container'>
        <h3 className='fw-bold'>Quiz Completed !</h3>
        <div className='d-flex justify-content-between result-detailsbox-width mt-4 mb-2'>
            <h5>Name</h5>
            <h5 style={{color:'maroon',fontWeight:'bold'}}>{name}</h5>
        </div>
        <div className='d-flex justify-content-between result-detailsbox-width my-2'>
            <h5>Score</h5>
            <h5 style={{color:'maroon',fontWeight:'bold'}}>{result}</h5>
        </div>
        <div className='d-flex justify-content-between result-detailsbox-width my-2'>
            <h5>Number of Correct Answers</h5>
            <h5 style={{color:'maroon',fontWeight:'bold'}}>{result}</h5>
        </div>
        <div className='d-flex justify-content-between result-detailsbox-width my-2'>
            <h5>Total number of Questions</h5>
            <h5 style={{color:'maroon',fontWeight:'bold'}}>{Questions.length}</h5>
        </div>
        <div>
            <button className='btn rounded fw-bold' style={{backgroundColor:'black',color:'white'}} onClick={restartGame}>Start Again</button>
        </div>
    </div>
  )
}

export default EndGameScreen
