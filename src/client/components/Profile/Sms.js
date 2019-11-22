import React, { useState } from 'react';
import { PostData } from '../customHooks';

const Sms = () => {
  const [input, setInput] = useState(null);
  const handleInput = e => {
    e.prevent;
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    PostData('/api/sms', input);
  };

  console.log(input);
  return (
    <div className='container'>
      <div className='col'>
        <div className='form-area'>
          <form role='form'>
            <br style={{ clear: 'both' }} />
            <h3 style={{ marginBottom: '25px', textAlign: 'center' }}>
              Send Message
            </h3>

            <div className='form-group' style={{ width: '40%' }} align='center'>
              <input
                type='number'
                className='form-control'
                id='phone'
                name='phone'
                placeholder='Phone number'
                onChange={handleInput}
                required
              />
            </div>
            <div className='form-group'>
              <textarea
                id='congratulation-text'
                name='message'
                onChange={handleInput}
              ></textarea>
              <span className='help-block'></span>
            </div>

            <button
              type='button'
              id='submit'
              name='submit'
              className='btn btn-primary pull-right'
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Sms;
