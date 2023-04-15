import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Cards(props) {

  var {name, setFlag, setIndex, index} = props;

  const handleClick = () => {
    setFlag(true);
    setIndex(index);

  }
  return (
    <Card>
      <Card.Img variant="top" src="https://dhmatextileassociation.com/images/aa.png" style={{height: 100, width: 100,}} className='m-2'/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="outline-primary" onClick={handleClick}>More</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards;