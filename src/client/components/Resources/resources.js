import React, { useState, useEffect } from 'react';
import FilterResults from 'react-filter-search';
import Data from './tips.json';

import './style.css';

const Resource = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    setData(Data);
  });
  console.log(data);
  const handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  return (
    //   <div>
    //   <input type="text" value={value} onChange={handleChange} />
    //   <SearchResults
    //     value={value}
    //     data={data}
    //     renderResults={results => (
    //       <div>
    //         {results.map(el => (
    //           <div>
    //             <span>{el.name}</span>
    //             <span>{el.email}</span>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   />
    // </div>
    <div>
      <section className='all_post section_padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='row'>
                {data.map(item => (
                  <div className='col-lg-6 col-sm-6'>
                    <div className='single_post post_1'>
                      <div className='single_post_img'>
                        <img src={item.image} alt='' />
                      </div>
                      <div className='single_post_text text-center'>
                        <a href='category.html'>
                          <h5> {item.title}</h5>
                        </a>
                        <a href='single-blog.html'>
                          <h2>{item.content}</h2>
                        </a>
                        <p>Posted on April 15, 2019</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='page_pageniation'>
                <nav aria-label='Page navigation example'>
                  <ul className='pagination justify-content-center'>
                    <li className='page-item disabled'>
                      <a
                        className='page-link'
                        href='#'
                        tabIndex='-1'
                        aria-disabled='true'
                      >
                        Previous
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        3
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='sidebar_widget'>
                <div className='single_sidebar_wiget search_form_widget'>
                  <form action='#'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search Keyword'
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Search Keyword'"
                      />
                      <div className='btn_1'>search</div>
                    </div>
                  </form>
                </div>
                <div className='single_sidebar_wiget'>
                  <div className='sidebar_tittle'>
                    <h3>Categories</h3>
                  </div>
                  <div className='single_catagory_item category'>
                    <ul className='list-unstyled'>
                      <li>
                        <a href='category.html'>Feedback</a> <span>(15)</span>{' '}
                      </li>
                      <li>
                        <a href='category.html'>Testimony</a> <span>(15)</span>{' '}
                      </li>
                      <li>
                        <a href='category.html'>Events</a> <span>(15)</span>{' '}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Resource;
