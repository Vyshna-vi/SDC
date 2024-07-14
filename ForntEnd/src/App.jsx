import { useState } from 'react'
import HomePage from './Components/HomePage/HomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
      <Route path='' element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
