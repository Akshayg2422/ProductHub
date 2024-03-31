import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice';
import './Login.css'
import * as Yup from 'yup'

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    email: Yup.string().required('Email is Required').email('Invalid Format'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await validationSchema.validate({
        name, email, password
      }, { abortEarly: false })

      dispatch(login({ name, email, password }))
    } catch (error) {
      const newError = {}
      console.log(error.inner)
      error.inner.forEach(err => {
        newError[err.path] = err.message
      })
      setErrors(newError)
    }

  }

  return (
    <div className="vh-100 card d-flex justify-content-center align-items-center">
      <form className={'border border-dark rounded p-4'} onSubmit={handleSubmit}>
        <label className="h6" htmlFor={"name"}>
          Name
        </label>
        <div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {errors.name && <h6 className="text-danger">{errors.name}</h6>}
        </div>
        <label className="h6" htmlFor={"email"}>
          Email
        </label>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.email && <h6 className="text-danger">{errors.email}</h6>}
        </div>
        <label className="h6" htmlFor={"pswd"}>
          Password
        </label>
        <div>
          <input
            type="password"
            id="pswd"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errors.password && <h6 className="text-danger">{errors.password}</h6>}
        </div>

        <div className="text-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;