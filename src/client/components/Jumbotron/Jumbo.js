import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from 'mdbreact';
import corn from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';

const CarouselPage = () => {
  return (
    <div className='w-auto jumbo'>
      <MDBCarousel
        activeItem={1}
        length={3}
        width={20}
        showControls={true}
        showIndicators={true}
        className='z-depth-1'
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId='1'>
            <MDBView>
              <img className='d-block w-100' src={pic2} alt='First slide' />
              <MDBMask overlay='black-light' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>CHANGING FARMING PERSPECTIVE</h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='2'>
            <MDBView>
              <img className='d-block w-100' src={corn} alt='Second slide' />
              <MDBMask overlay='black-strong' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>CHANGING FARMING PERSPECTIVE</h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='3'>
            <MDBView>
              <img
                className='d-block w-100'
                src={pic3}
                alt='Third slide'
              />
              <MDBMask overlay='black-slight' />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className='h3-responsive'>CHANGING FARMING PERSPECTIVE</h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default CarouselPage;
