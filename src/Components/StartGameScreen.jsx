import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField } from '@mui/material';
import { QuizContext } from '../ContextAPI/Contexts';
import '../App.css'

function StartGameScreen() {
    const {gameState,setGameState,name,setName} = useContext(QuizContext)

    const getPlayerName = (name) => {
      setName(name);
    };

    const startGame = () => {
      if (name) {
        setGameState('quiz')
      } else {
        toast.warning("Enter your name to start the game",{
          className: 'toast-message'
        });
      }
    };

  return (
      <>
          <div className='d-flex flex-column align-items-center w-auto'>
                <TextField onChange={(e)=>getPlayerName(e.target.value)} id="outlined-basic" label="Player Name" variant="outlined" placeholder='Enter your name...'/>
                <Button variant="contained" className='my-4 playnow-button' onClick={startGame}>Play Now</Button>
          </div>
          <ToastContainer position='top-center' theme='colored' autoClose={2000} />
      </>
  )
}

export default StartGameScreen
