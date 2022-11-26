import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import TicTac from './components/TicTak/TicTac';
import Wordle from './components/wordle/Wordle'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/wordle" element={<Wordle/>}/>
    <Route path="/tictac" element={<TicTac/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
