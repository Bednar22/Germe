import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className='bg-yellow-200'>
            <h1 className=''>Welcome to React Router!</h1>
            <Routes>
                <Route path='/' />
                <Route path='about' />
            </Routes>
        </div>
    );
}

export default App;
