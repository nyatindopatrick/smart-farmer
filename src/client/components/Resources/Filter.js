import React, {useState, useEffect} from 'react';
import FilterResults from 'react-filter-search';
import Data from "./tips.json";
 
const Filter =(props) =>{
    const [data, setData]= useState([])
    const [value, setValue]=useState("")
useEffect(()=>{

  setData({...Data });
})

   

  const handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

    return (
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <SearchResults
          value={value}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.name}</span>
                  <span>{el.email}</span>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    );
  }

export default Filter;