import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './Pages/Hero.jsx';
import Footer from './components/Footer.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'projects':
        return <h2 className="text-4xl text-white">Projects Section</h2>;
      case 'about':
        return <h2 className="text-4xl text-white">About Section</h2>;
      default:
        return <h2 className="text-4xl text-white">Page Not Found</h2>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <Navbar
          title="My Portfolio"
        />
      </div>
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer/>
    </div>

  );
}

export default App;