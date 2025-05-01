// import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  // console.log(window.location.pathname)
  // let Component
  // switch (window.location.pathname) {
  //   case '/':
  //     Component = <Home/>
  //     break
  //   case '/page1':
      
  //     break
  //   case '/page2':
  //     console.log('Page2')
  //     break
  //   default:
  //     console.log('Not Found')
  //     break
  // }

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
    </>
  )
}

export default App;
