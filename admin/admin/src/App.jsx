import AdLogin from './pages/AdLogin'
import AdDb from './pages/AdDb'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdEdit from './pages/AdEdit'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AdLogin />} />
          <Route path='/AdminDB' element={<AdDb />} />
          <Route path='/AdminEdit' element={<AdEdit />} />
          <Route path='/home' element={<AdDb />} />
          <Route path='/data' element={<AdEdit />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
