import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/userpage" element={<UserPage/>}/>
    </Routes>
    </>
  )
}

export default App
