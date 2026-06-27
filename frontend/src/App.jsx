// import React from 'react';
import Navbar from './components/Navbar.jsx';
import Front from './components/Front.jsx';

const App = () => {
  return (
    <div>
      <nav className="relative z-50">
      <Navbar/>
      </nav>

      <main className="relative z-0 overflow-hidden">
        <Front/>
      </main>
    </div>
  )
}

export default App