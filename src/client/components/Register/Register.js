import React, { useState } from 'react';
import { PostData } from '../customHooks';

const Register = () => {
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
  console.log(input);
  return (
    <div className='page-wrapper bg- p-t-45 p-b-50'>
      <div className='wrapper wrapper--w790'>
        <div className='card card-5'>
          <div className='card-heading'>
            <h2 style={{ color: 'white' }}>Registration Form</h2>
          </div>
          <div className='card-body'>
            <form>
              <div className='form-row m-b-55'>
                <div className='name'>Name</div>
                <div className='value'>
                  <div className='row row-space'>
                    <div className='col-5'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='text'
                          name='first_name'
                          onChange={handleInput}
                        />
                        <label className='label--desc'>first name</label>
                      </div>
                    </div>
                    <div className='col-5'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='text'
                          onChange={handleInput}
                          name='last_name'
                        />
                        <label className='label--desc'>last name</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='form-row'>
                <div className='name'>Email</div>
                <div className='value'>
                  <div className='input-group'>
                    <input
                      className='input--style-5'
                      type='email'
                      onChange={handleInput}
                      name='email'
                    />
                  </div>
                </div>
              </div>
              <div className='form-row m-b-55'>
                <div className='name'>Phone</div>
                <div className='value'>
                  <div className='row row-refine'>
                    <div className='col-9'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='text'
                          onChange={handleInput}
                          name='phone'
                        />
                        <label className='label--desc'>Phone Number</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-row m-b-55'>
                <div className='name'>Password</div>
                <div className='value'>
                  <div className='row row-refine'>
                    <div className='col-9'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='password'
                          onChange={handleInput}
                          name='password'
                        />
                        <label className='label--desc'>Password</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-row m-b-55'>
                <div className='name'>Password</div>
                <div className='value'>
                  <div className='row row-refine'>
                    <div className='col-9'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='password'
                          onChange={handleInput}
                          name='password2'
                        />
                        <label className='label--desc'>Confirm Password</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-row m-b-55'>
                <div className='name'>Location</div>
                <div className='value'>
                  <div className='row row-refine'>
                    <div className='col-9'>
                      <div className='input-group-desc'>
                        <input
                          className='input--style-5'
                          type='text'
                          onChange={handleInput}
                          name='location'
                        />
                        <label className='label--desc'>Location</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='form-row p-t-20'>
                <label className='label label--block'>
                  Are you a new farmer?
                </label>
                <div className='p-t-15'>
                  <label className='radio-container m-r-55'>
                    Yes
                    <input
                      type='radio'
                      checked='checked'
                      onChange={handleInput}
                      name='exist'
                      value='Yes'
                    />
                    <span className='checkmark'></span>
                  </label>
                  <label className='radio-container'>
                    No
                    <input
                      type='radio'
                      onChange={handleInput}
                      name='exist'
                      value='No'
                    />
                    <span className='checkmark'></span>
                  </label>
                </div>
              </div>
              <div>
                <button
                  className='btn btn--radius-2 btn--red'
                  type='submit'
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
