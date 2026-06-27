import React from 'react';
import Navbar from './components/Navbar.jsx';
import Front from './components/Front.jsx';

const App = () => {
  return (
    <div>
      <nav>
      <Navbar/>
      </nav>

      <main>
        <Front/>
      </main>
    </div>
  )
}

export default App