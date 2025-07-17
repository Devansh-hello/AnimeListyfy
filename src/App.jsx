import './index.css'
import Favorite from './Pages/Favorite';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {

  return (
    <div className="flex flex-col gap-6 bg-[url(https://media.discordapp.net/attachments/1084257517229592659/1395353761836302396/blob-scene-haikei.png?ex=687a23f5&is=6878d275&hm=fc5b1b417ddb39c46bcd95e75d430ae1276e82c18afd92e7ba808c92821ef81b&=&format=webp&quality=lossless&width=781&height=520)] bg-[#000000] bg-cover w-screen h-screen font-mono text-amber-50 ">
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
