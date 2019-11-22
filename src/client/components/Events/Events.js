import React from 'react';

const Events = () => {
    return (
        <div style={{marginTop:"55px", background:"#ecf0f1"}}>
            <h3 style={{color:"#3931af"}} align="center">Upcoming Events</h3>

         <section className="details-card">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-content">
                            <div className="card-img">
                                <img src="https://placeimg.com/380/230/nature" alt="" />
                                <span><h4>December 4th</h4></span>
                            </div>
                            <div className="card-desc">
                                <h3>AGRITECH AFRICA 2020</h3>
                                <p>The exhibition will be held on June 17-19 at the Cape Town International Convention 
                                Center (CTICC). Visitors from neighboring countries attend this show </p><br/>
                                <a href="#" className="btn-card">RSVP Now!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-content">
                            <div className="card-img">
                                <img src="https://placeimg.com/380/230/animals" alt="" />
                                <span><h4>December 13</h4></span>
                            </div>
                            <div className="card-desc">
                                <h3>IFTEX Expo Kenya</h3>
                                <h3>Nairobi</h3>
                                <p>IFTEX Expo Kenya is a great platform for interaction among Kenyan flower grower and 
                                international flower buyers. </p>
                                <a href="#" className="btn-card">RSVP Now!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-content">
                            <div className="card-img">
                                <img src="https://placeimg.com/380/230/tech" alt="" />
                                <span><h4>April 31</h4></span>
                            </div>
                            <div className="card-desc">
                                <h3>IBC Africa Sugar Conference (IBCs Africa Sugar Conference)</h3>
                                <p>The IBC Africa Sugar Conference focuses on finding markets...</p>
                                <a href="#" className="btn-card">RSVP Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
         </section>
        </div>
    );
};
export default Events;