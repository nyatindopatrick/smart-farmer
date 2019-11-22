import React from 'react';

const Contact = () => {
    return(
        <div className="container">

<h3 className="text-center">Contact us</h3><br />

<div className="row">
  <div className="col-md-8">
      <form action="/post" method="post">
        <input className="form-control" name="name" placeholder="Name..." /><br />
        <input className="form-control" name="phone" placeholder="Phone..." /><br />
        <input className="form-control" name="email" placeholder="E-mail..." /><br />
        <textarea className="form-control" name="text" placeholder="How can we help you?" style={{height:"150px"}}>
        </textarea><br />
        <input className="btn btn-primary" type="submit" value="Send" /><br /><br />
      </form>
  </div>
  <div className="col-md-4">
    <b>Customer service:</b> <br />
    Phone: 0799820090<br />
    E-mail: <a href="mailto:support@mysite.com">support@gmail.com</a><br />
    <br /><br />
    <b>Headquarter:</b><br />
    Company Inc, <br />
    Okore drive 3<br />
    55001 Kisumu, Kenya<br />
    Phone: 0799820090<br />
    <a href="mailto:usa@mysite.com">smartfarmer@gmail.com</a><br />


    <br /><br />
    <b>Kakamega:</b><br />
    Company Kach Ltd, <br />
    25/F.168 Msandu<br />
    Fish Street, Kakamega<br />
    Phone: 0718714785<br />
    <a href="mailto:hk@mysite.com">kakamega@mysite.com</a><br />


  </div>
</div>

</div>
    );
};

export default Contact; 
