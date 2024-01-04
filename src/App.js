import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import ProductList from './Components/ProductList';
import Profile from './Components/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/ProductList' element={<ProductList />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='*' element={<h1>No data Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
