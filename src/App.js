import './App.css';
import { useState } from 'react';
import { QuizContext } from './ContextAPI/Contexts';
import StartGameScreen from './Components/StartGameScreen';
import EndGameScreen from './Components/EndGameScreen';
import QuizScreen from './Components/QuizScreen';
import Switch from "react-switch";

function App() {

  const [name,setName] = useState('')
  const [gameState,setGameState] = useState('start')
  const [theme,setTheme] = useState('light')
  const [result,setResult] = useState(0)

  const toggleTheme = ()=>{
    setTheme(currTheme=>(currTheme === 'light'?'dark':'light'))
  }
  
  return (
    <>
    <QuizContext.Provider value={{gameState,setGameState,name,setName,theme,result,setResult}}>
      
      <div className='d-flex flex-column justify-content-center align-items-center w-auto' id={theme} style={{height:'100vh'}}>
      <div className='shadow p-5 border-rad box-width bg-color padding'>
        {gameState === 'start' &&
        <h3 className='text-center my-5 fw-bold'>Quiz App</h3>
        }
        {gameState === 'quiz' &&
        <h3 className='text-center mb-5'>Questions</h3>
        }          
              {gameState==='start' && <StartGameScreen/>}
              {gameState==='quiz' && <QuizScreen/>}
              {gameState==='end' && <EndGameScreen/>}
          </div>
      <Switch className='my-5'onChange={toggleTheme} checked={theme==='light'}/>

      </div>
    </QuizContext.Provider>
    </>
  );
}

export default App;
