import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Work from './Components/MyWork/Work'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
