import logo from './logo.svg';
import './App.css';
import LandingPage from './screens/landingPage/LandingPage';
import About from './components/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
