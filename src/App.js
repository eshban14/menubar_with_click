import './App.css';
import Layout from './components/Layout/Layout';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SlidingMenu from './components/slidingmenu/SlidingMenu';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import { Outlet } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="App">
      <Layout toggleMenu={toggleMenu} />
      <Nav />
      <SlidingMenu isMenuOpen={isMenuOpen} />

      <Routes>

      <Route path='/' element={<Layout/>}>

       <Route index element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
      

      </Route>

    </Routes>
    </div>
  );
}

export default App;
