import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <section id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading'>About</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <ul className='timeline'>
                <li>
                  <div className='timeline-image'>
                    <img
                      className='img-circle img-responsive'
                      src='img/about/1.jpg'
                      alt=''
                    />
                  </div>
                  <div className='timeline-panel'>
                    <div className='timeline-heading'>
                      <h4 className='subheading'>
                        Changing farming perspective
                      </h4>
                    </div>
                    <div className='timeline-body'>
                      <p className='text-muted'>
                        We aim to promote the access of information to both new
                        and existing farmers especially the youth to enable them
                        make informed decisions and change the negative
                        perception about farming that has been propagated. We
                        realized that a lot of the negative perceptions on
                        farming especially among young people (and even their
                        guardians) is based on lack of proper information about
                        what, when and how to farm. We hope that by relaying
                        this information in a way that is easy to understand, we
                        can equip young people with the best farming methods,
                        promote innovation, give access to data/resources as
                        well as linking them to markets that is tailored to
                        their geographical locations.
                      </p>
                    </div>
                  </div>
                </li>
                <li className='timeline-inverted'>
                  <div className='timeline-image'>
                    <img
                      className='img-circle img-responsive'
                      src='img/about/2.jpg'
                      alt=''
                    />
                  </div>
                  <div className='timeline-panel'>
                    <div className='timeline-heading'>
                      <h4 className='subheading'>Linking Farmers </h4>
                    </div>
                    <div className='timeline-body'>
                      <p className='text-muted'>
                        We offer a location based farming resource platform that
                        helps farmers know what to grow where. We also help link
                        new farmers with older more experienced farmers; Give
                        them access to Resources; Enable them access funds and
                        loans; Equip them with knowledge about where to buy
                        seeds, feeds, fertilizers, equipment etc and have them
                        delivered to their doorsteps. We also offer links to
                        trainings, Events/ meet ups for exchanging information
                        around their region. And finally help Connect them to
                        ready markets.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='timeline-image'>
                    <img
                      className='img-circle img-responsive'
                      src='img/about/3.jpg'
                      alt=''
                    />
                  </div>
                  <div className='timeline-panel'>
                    <div className='timeline-heading'>
                      <h4 className='subheading team'>
                        <a href='#team'>Our Team</a>
                      </h4>
                    </div>
                    <div className='timeline-body'>
                      <p className='text-muted'>
                        “Smart Farm” is run by a group of talented youths with a
                        passion for farming in collaboration with “ “ an
                        international organization that seeks to grow and
                        revolutionize the farming industry.
                      </p>
                    </div>
                  </div>
                </li>
                <li className='timeline-inverted'>
                  <Link to='/register'>
                    <div className='timeline-image'>
                      <h4>
                        Be Part <br />
                        Of Our <br />
                        Story!
                      </h4>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id='team' className='bg-light-gray'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2
                className='section-heading'
                style={{ color: '#0000 !important' }}
                id='team'
              >
                Our Amazing Team
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='team-member'>
                <img
                  src='https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-1/c201.33.1238.1238a/s160x160/67927587_2406787432933574_3032428089876414464_o.jpg?_nc_cat=102&_nc_ohc=1qSFwFkXyQcAQne_aFHT90t3pvGPKgYJs_YKSMttpkDadnP-3L132Jm6g&_nc_ht=scontent.fnbo1-1.fna&oh=465562f53126d441b07618e5edf5e963&oe=5E8BCB5B'
                  className='img-responsive img-circle'
                  alt=''
                />
                <h4>Patrick Nyatindo</h4>
                <p className='text-muted'>Lead Developer</p>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='team-member'>
                <img
                  src='https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-1/p160x160/72396560_200116944334627_5582039677440884736_n.jpg?_nc_cat=111&_nc_ohc=-xUXNeZoitMAQkT3pn4r7gAMieCpFuH3UD4SH0efELPzCIc4y9wjqOKtg&_nc_ht=scontent.fnbo1-1.fna&oh=f475ef08ebf7db85b946cc067414b25f&oe=5E468C77'
                  className='img-responsive img-circle'
                  alt=''
                />
                <h4>Lillian Mathu</h4>
                <p className='text-muted'> Lead Designer </p>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='team-member'>
                <img
                  src='https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-1/c201.33.1238.1238a/s160x160/67927587_2406787432933574_3032428089876414464_o.jpg?_nc_cat=102&_nc_ohc=1qSFwFkXyQcAQne_aFHT90t3pvGPKgYJs_YKSMttpkDadnP-3L132Jm6g&_nc_ht=scontent.fnbo1-1.fna&oh=465562f53126d441b07618e5edf5e963&oe=5E8BCB5B'
                  className='img-responsive img-circle'
                  alt=''
                />
                <h4>Trevor Leone</h4>
                <p className='text-muted'>Researcher</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-lg-offset-2 text-center'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
