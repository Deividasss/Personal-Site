import './App.css';
import MainPage from './components/mainPage/MainPage';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import HireMe from './components/HireMe/HireMe';
import Projects from './components/Projects/Projects';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "DK Personal Page"
  }, []);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='About' element={<About />} />
          <Route exact path='HireMe' element={<HireMe />} />
          <Route exact path='Projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
