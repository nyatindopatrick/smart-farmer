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
            <p>
              We help small and marginal farmers, that account for 98% of the
              farmers' population in India by making processes used to avail
              resources and schemes, accessible, transparent and time efficient.
            </p>
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
