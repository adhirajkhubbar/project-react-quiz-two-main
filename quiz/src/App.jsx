import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Start/Home'
import Quiz from './Components/Quiz/Quiz'
import Results from './Components/Results/Results'

function App() {

  const [currPage, setCurrPage] = useState("home");
  let playClick = () => {
    setCurrPage("quiz")
  }

  let renderPage = () => {
    switch(currPage){
      case "home":
        return <Home playClick={playClick}/>
      case "quiz":
        return <Quiz />
      case "result":
        return <Results />
      }
      
  }

  return <div className='App'>{renderPage()}</div>
  }
export default App
