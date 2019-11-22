import React from 'react';

const Profile = () => {
  return (
    <div class='container' style={{ marginTop: '60px' }}>
      <div class='row'>
        <div class='col-12'>
          <div class='card'>
            <div class='card-body'>
              <div class='card-title mb-4'>
                <div class='d-flex justify-content-start'>
                  <div class='image-container'>
                    <img
                      src='https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-1/p160x160/72396560_200116944334627_5582039677440884736_n.jpg?_nc_cat=111&_nc_ohc=-xUXNeZoitMAQkT3pn4r7gAMieCpFuH3UD4SH0efELPzCIc4y9wjqOKtg&_nc_ht=scontent.fnbo1-1.fna&oh=f475ef08ebf7db85b946cc067414b25f&oe=5E468C77'
                      id='imgProfile'
                      style={{ width: '150px', height: '150px' }}
                      class='img-thumbnail'
                    />
                  </div>
                  <div class='userData ml-3'>
                    <h2
                      class='d-block'
                      style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                      <a href='javascript:void(0);'>Lilian Mathu</a>
                    </h2>
                  </div>
                  <div class='ml-auto'>
                    <input
                      type='button'
                      class='btn btn-primary d-none'
                      id='btnDiscard'
                      value='Discard Changes'
                    />
                  </div>
                </div>
              </div>

              <div class='row'>
                <div class='col-12'>
                  <ul class='nav nav-tabs mb-4' id='myTab' role='tablist'>
                    <li class='nav-item'>
                      <a
                        class='nav-link active'
                        id='basicInfo-tab'
                        data-toggle='tab'
                        href='#basicInfo'
                        role='tab'
                        aria-controls='basicInfo'
                        aria-selected='true'
                      >
                        Basic Info
                      </a>
                    </li>
                  </ul>
                  <div class='tab-content ml-1' id='myTabContent'>
                    <div
                      class='tab-pane fade show active'
                      id='basicInfo'
                      role='tabpanel'
                      aria-labelledby='basicInfo-tab'
                    >
                      <div class='row'>
                        <div class='col-sm-3 col-md-2 col-5'>
                          <label style={{ fontWeight: 'bold' }}>
                            Full Name
                          </label>
                        </div>
                        <div class='col-md-8 col-6'>Lilian Mathu</div>
                      </div>
                      <hr />

                      <div class='row'>
                        <div class='col-sm-3 col-md-2 col-5'>
                          <label style={{ fontWeight: 'bold' }}>
                            Birth Date
                          </label>
                        </div>
                        <div class='col-md-8 col-6'>March 22, 1994.</div>
                      </div>
                      <hr />

                      <div class='row'>
                        <div class='col-sm-3 col-md-2 col-5'>
                          <label style={{ fontWeight: 'bold' }}>County</label>
                        </div>
                        <div class='col-md-8 col-6'>Nairobi</div>
                      </div>
                      <hr />
                      <div class='row'>
                        <div class='col-sm-3 col-md-2 col-5'>
                          <label style={{ fontWeight: 'bold' }}>Emailg</label>
                        </div>
                        <div class='col-md-8 col-6'>mathu@gmail.com</div>
                      </div>
                      <hr />
                      <div class='row'>
                        <div class='col-sm-3 col-md-2 col-5'>
                          <label style={{ fontWeight: 'bold' }}>Phone</label>
                        </div>
                        <div class='col-md-8 col-6'>07784545455</div>
                      </div>
                      <hr />
                    </div>
                    <div
                      class='tab-pane fade'
                      id='connectedServices'
                      role='tabpanel'
                      aria-labelledby='ConnectedServices-tab'
                    >
                      Facebook, Google, Twitter Account that are connected to
                      this account
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
