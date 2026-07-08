// import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Front from "./components/Front.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Action from "./components/Action.jsx";
import Services from "./components/Services.jsx";

const App = () => {
  return (
    <div className="relative">
      <nav className="relative z-50 fixed">
        <div className="fixed w-screen">
          <Navbar />
        </div>
      </nav>

      <main className="relative z-0 overflow-hidden" id="#home">
        <Front />
      </main>

      <section>
        <About />
        <Expertise />
        <Services />
        <Portfolio />
        <Action />
      </section>

      <Footer />
    </div>
  );
};

export default App;
