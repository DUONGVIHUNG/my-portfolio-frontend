import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './Pages/Hero.jsx';
import About from './Pages/About.jsx';
import Project from './Pages/Project.jsx';
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <Navbar
          title="My Portfolio"
        />
      </div>
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/project' element={<Project/>} />
        </Routes>
      </main>
      <Footer/>
    </div>

  );
}

export default App;