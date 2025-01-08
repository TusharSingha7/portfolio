
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppBar from './components/appbar'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import CPprofiles from './pages/cpprofiles'
import Skills from './pages/skills'

function App() {
  return (
    <BrowserRouter>
    <div className='p-4 min-h-full min-h-screen'>
    <AppBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/cpprofiles' element={<CPprofiles/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
