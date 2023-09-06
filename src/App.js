import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:category" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
