import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import ProductList from './Components/ProductList';
import Profile from './Components/Profile';
import LeftSideMenu from './Components/LeftSideMenu';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux'

function App() {

  const user = useSelector(selectUser)
  return (
    <div>
      {
        user ?
          <>
            <LeftSideMenu />
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='*' element={<h1>No data Found</h1>} />
            </Routes>
          </> : <Login />
      }
    </div>
  );
}

export default App;
