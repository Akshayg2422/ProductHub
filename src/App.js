import Login from './Components/Login';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar/Sidebar';

function App() {

  const user = useSelector(selectUser)
  return (
    <div>
      {
        user ?
          <>
            <Sidebar />
          </> : <Login />
      }
    </div>
  );
}

export default App;
