// import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import FooterBasic from './components/FooterBasic'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<div>Page 1</div>} />
          <Route path="/page2" element={<div>Page 2</div>} />
          <Route path="/page3" element={<div>Page 3</div>} />
        </Routes>
      </div>
      <FooterBasic />
    </>
  )
}

export default App;
