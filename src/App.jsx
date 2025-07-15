import './App.css'
import Favorite from './Pages/Favorite';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {

  return (
    <div>
      <NavBar />

      <main>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorite' element={<Favorite/>} />
      </Routes>

    </main>

    </div>
  )
  
}


export default App
