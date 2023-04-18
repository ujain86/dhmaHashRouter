import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Cards(props) {

  var {data, setFlag, setIndex, setName, index} = props;

  const handleClick = () => {
    // setFlag(true);
    // setIndex(index);
    // setName("/"+ data[1].Name);    
    window.location.href="/"+ data[2].Name;
    
  }

  return (
    <div id='card'>
      <img src={data[1].image} style={{height: 200, width: 200, marginRight: 20, borderRadius: 10}}></img>
      
      <div className='mt-4'>
        <h6>{data[0].Designation}</h6>
        <p>{data[2].Name}</p>
        <Button variant="outline-primary" onClick={handleClick}>More</Button>
      </div>
      
    </div>
  )
}

export default Cards;