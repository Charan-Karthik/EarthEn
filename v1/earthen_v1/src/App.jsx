import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Media from './pages/media/Media';
import Solutions from './pages/solutions/Solutions';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='solutions' element={<Solutions/>}/>
        <Route path='media' element={<Media/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App