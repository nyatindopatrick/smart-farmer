import React from 'react';
import { Link } from 'react-router-dom';
import Jumbo from '../Jumbotron/Jumbo';

const Home = () => {
  return (
    <div>
      <Jumbo />
      <div className='row'>
        <div className='col-md-8 ml-auto mr-auto text-center'>
          <h2 className='title'>Who are we?</h2>
          <h5 className='description'>
            We are a group of youths trying to change the perspective about
            farming among fellow youths by providing relevant information and
            links that will allow more of us to create sustainable opportunities
            and be self-employed...<Link to='/about'>Read more</Link>
          </h5>
          <section className='service-tab-section section'>
            <h2 className='title'>What We Do</h2>
            <div className='outer-box clearfix'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='tabs'>
                      <ul className='nav nav-tabs' role='tablist'>
                        <li role='presentation' className='active'>
                          <a href='#dormitory' data-toggle='tab'>
                            WATER IS LIFE
                          </a>
                        </li>
                        <li role='presentation'>
                          <a href='#orthopedic' data-toggle='tab'>
                            AFFORDABILITY & GREAT CUSTOMER SERVICE
                          </a>
                        </li>
                        <li role='presentation'>
                          <a href='#sonogram' data-toggle='tab'>
                            ENOUGH CAPACITY
                          </a>
                        </li>
                        <li role='presentation'>
                          <a href='#x-ray' data-toggle='tab'>
                            DAMAGE CONTROL
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='tab-content'>
                      <div
                        className='service-box tab-pane fade in active row'
                        id='dormitory'
                      >
                        <div className='col-md-6'>
                          <img
                            className='img-responsive'
                            src='images/services/service-one.jpg'
                            alt='service-image'
                          />
                        </div>
                        <div className='col-md-6'>
                          <div className='contents'>
                            <div className='section-title'>
                              <h3>Water Is Life</h3>
                            </div>
                            <div className='text'>
                              <p>
                                This is only true of fresh water. Once fresh
                                water is used up, it is nolonger life. KAWAWAMA
                                recycles all used water making it safe again.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='service-box tab-pane fade in'
                        id='orthopedic'
                      >
                        <div className='col-md-6'>
                          <img
                            className='img-responsive'
                            src='images/services/service-two.jpg'
                            alt='service-image'
                          />
                        </div>
                        <div className='col-md-6'>
                          <div className='contents'>
                            <div className='section-title'>
                              <h3>Affordability & great customer service</h3>
                            </div>
                            <div className='text'>
                              <p>
                                Our rates are quite competitive but for this
                                Month of June, we have reduced it unimaginably.
                                We have the june offer of just Ksh. 1,500 per
                                scepric tank / latrine. Take advantage before
                                the offer ends.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='service-box tab-pane fade in'
                        id='sonogram'
                      >
                        <div className='col-md-6'>
                          <img
                            className='img-responsive'
                            src='images/services/service-three.jpg'
                            alt='service-image'
                          />
                        </div>
                        <div className='col-md-6'>
                          <div className='contents'>
                            <div className='section-title'>
                              <h3>Enough Capacity</h3>
                            </div>
                            <div className='text'>
                              <p>
                                We have enough sucker trucks to service our area
                                of operation without clients waiting in line for
                                days. We are able to respond within one day of
                                client placing order.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='service-box tab-pane fade in' id='x-ray'>
                        <div className='col-md-6'>
                          <img
                            className='img-responsive'
                            src='images/services/service-four.jpg'
                            alt='service-image'
                          />
                        </div>
                        <div className='col-md-6'>
                          <div className='contents'>
                            <div className='section-title'>
                              <h3>Damage Control</h3>
                            </div>
                            <div className='text'>
                              <p>
                                For burst sewers like the above, we have enough
                                expertise and equipment to drain it all up
                                hygienically in no time.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
{
  /* <Jumbo /> */
}
