import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice';
import './Login.css'

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      login({
        name: name,
        email: email,
        password: password
      })
    )
  }

  return (
    <div className='container-login'>
      <h2>Login Page</h2>
      <label>
        Username:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;