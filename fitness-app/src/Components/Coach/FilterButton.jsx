import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import './Filter.css'
import OneCoach from './OneCoach'
import Stack from 'react-bootstrap/Stack';
import './AllCoaches.css'
import AllCoaches from './AllCoaches';

const FilterButton = ({ items }) => {
  
  const [values, setValues] = useState([]);

    return (
      <>
        <Dropdown>
          <Dropdown.Toggle className='button-4' variant="success" id="button-4">
            {items[0]}
          </Dropdown.Toggle>
    
          <Dropdown.Menu id="dropdown">
            <Dropdown.Item onClick={()=>setValues([...values, items[1]])}>{items[1]}</Dropdown.Item>
            <Dropdown.Item onClick={()=>setValues([...values, items[2]])}>{items[2]}</Dropdown.Item>
            <Dropdown.Item onClick={()=>setValues([...values, items[3]])}>{items[3]}</Dropdown.Item>
            <Dropdown.Item onClick={()=>setValues([...values, items[4]])}>{items[4]}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      
      </>
      );


}

export default FilterButton