// import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  console.log(window.location.pathname)
  let Component
  switch (window.location.pathname) {
    case '/':
      Component = <Home/>
      break
    case '/page1':
      
      break
    case '/page2':
      console.log('Page2')
      break
    default:
      console.log('Not Found')
      break
  }

  return (
    // <Routes>
      // <Route path="/" element={<NavBar/>} />
    // </Routes>
    <>
      <NavBar />
      {Component}
    </>
  )
}

export default App
