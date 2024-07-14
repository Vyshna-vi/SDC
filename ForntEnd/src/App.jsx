import { useState } from 'react'
<<<<<<< HEAD
import HomePage from './Components/HomePage/HomePage'
=======
>>>>>>> c44eb7c9ef21f56f0600d54fd1e8bce1fe9b760f
import './App.css'
// import HomePage from './Components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <div>
      <Routes>
      <Route path='' element={<HomePage/>} />
      </Routes>
    </div>
=======
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
>>>>>>> c44eb7c9ef21f56f0600d54fd1e8bce1fe9b760f
  )
}

export default App



