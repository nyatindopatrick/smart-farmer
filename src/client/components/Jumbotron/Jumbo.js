import React from 'react';
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon
} from 'mdbreact';

const JumbotronPage = () => {
  return (
    <div className='wrapper'>
      <div className='page-header page-header-small'>
        <div
          className='page-header-image'
          data-parallax='true'
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
          }}
        ></div>
        <div className='content-center'>
          <div className='container'>
            <h1 style={{color:"#ffff !important"}}>Changing Farming Perspective.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumbotronPage;
