import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Explore from './Pages/Explore/Explore'; 
import Nft from './Pages/Nft/Nft';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  const[theme,setTheme]=useState(true); 
  return (
    <div className={`App theme-${theme ? "light" : "dark"}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme}/>
        <main>
          <Routes>
            <Route exact path="/" element={<Explore/>} />
            <Route path="nft/:mint" element={<Nft/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <footer><Footer/></footer>
      </Router>  
    </div>
  );
}

export default App;
