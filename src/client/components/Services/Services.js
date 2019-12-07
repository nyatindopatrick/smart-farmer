import React from 'react'

export default function Services() {
    return (
        <section id="what-we-do">
            <div className="container-fluid">
                <h2 className="section-title mb-2 h1">What we do</h2>
                <p className="text-center text-muted h5">Having and managing a correct agricultural strategy is crucial in a fast growing economy.</p>
                <div className="row mt-5">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="card">
                            <div className="card-block block-1">
                                <h3 className="card-title">Location-based services</h3>
                                <p className="card-text">We will help you find services, farm inputs and other farmers near you.</p>
                                <a href="/services/maps" target="_blank" 
                                classNameName="stretched-link btn">Visit</a>                           
                             </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="card">
                            <div className="card-block block-2">
                                <h3 className="card-title">Tracking </h3>
                                <p className="card-text">We track the farm products from the time you buy seeds to the time the 
                                products are ready for sale.</p><br />
                                <a href="/services/tracking" target="_blank" 
                        className="stretched-link btn">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="card">
                            <div className="card-block block-3">
                                <h3 className="card-title">Ready market</h3>
                                <p className="card-text">Engage thousands of buyers directly when your produce is ready.</p> <br />
                                <a href="#" target="_blank" 
                                classNameName="stretched-link btn">Visit</a>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
