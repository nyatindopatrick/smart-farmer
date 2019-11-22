import React, { useState } from 'react';
import { PostData } from '../customHooks';

const Login = () => {
  const [input, setInput] = useState(null);

  const handleInput = e => {
    e.prevent;
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    PostData('/api/register', input);
  };
  return (
    <div>
      <div className='container'>
        <h1 className='form-heading'>login Form</h1>
        <div className='login-form'>
          <div className='main-div'>
            <div className='panel'>
              <h2>Login</h2>
              <p>Please enter your email and password</p>
            </div>
            <form id='Login'>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  name='email'
                  placeholder='Email Address'
                />
              </div>

              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword'
                  name='password'
           
                  placeholder='Password'
                />
              </div>
              <div className='forgot'>
                <a href='#'>Forgot password?</a>
              </div>
              <a href='/profile'>
                <button type='button' className='btn btn-primary'>
                  Login
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
