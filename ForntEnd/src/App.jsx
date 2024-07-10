import { useState } from 'react'
import './App.css'
// import HomePage from './Components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='header'>
        <div class='heading'>
          <h2 class='sdchead'>Supervisory Development Centre</h2>
        </div>
        <div class='buttons'>
          <button class='btn1'>Register</button>
          <button class='btn2'>FAQ</button>
          <button class='btn3'>Staff Login</button>
          <button class='btn4'>Candidate Login</button>
        </div>
      </div>
      <div class='btns2'>
        <button class='btn5'>About Us</button>
        <button class='btn6'>Programme</button>
        <button class='btn7'>Apprentice</button>
        <button class='btn8'>Placements</button>
        <button class='btn9'>Downloads</button>
        <button class='btn10'>Contact Us</button>
      </div>
    </>
  )
}

export default App



