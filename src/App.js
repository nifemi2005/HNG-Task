import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { BookList } from './pages/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<BookList/>} />
      </Routes>
    </>
  );
}

export default App;
