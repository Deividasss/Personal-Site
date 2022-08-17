import './App.css';
import MainPage from './components/mainPage/MainPage';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import HireMe from './components/HireMe/HireMe';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='About' element={<About />} />
          <Route exact path='HireMe' element={<HireMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
