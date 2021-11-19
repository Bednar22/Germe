import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import Homepage from './components/homepage';
import Flashcards from './components/flashcards';
import Gramma from './components/gramma';
import About from './components/about';
import Culture from './components/culture';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/flashcards' element={<Flashcards />} />
                    <Route path='/gramma' element={<Gramma />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/culture' element={<Culture />} />
                </Routes>
            </BrowserRouter>
            ,
        </>
    );
}

export default App;
