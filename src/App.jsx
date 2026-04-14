import Home from './pages/Home'
import Nav from './components/header/Nav'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Connect from './pages/Connect'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'



const App = () => {
  

  return (
    <div className=' bg-slate-900'>

        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />

        <Nav/>
        <Home/>
        <Skills/>
        <Projects/>
        <Connect/>
        <Footer/>
    </div>
  )
}

export default App
