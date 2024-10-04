import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './Pages/RootLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout/>}/>
      </Routes>
    </Router>
  )
}

export default App
