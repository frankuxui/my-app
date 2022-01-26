import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/'
import Home from './components/Home/'

const App = () => {
  return (
    <div className='App'>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
