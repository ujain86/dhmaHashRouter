import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Cards from './Cards';

function Middle(props) {

    // var arr = ["Sh. Mukesh Sachdeva", "Sh. Shribhagwan Bansal", "Sh. Bhim Sen Dhingra", "Sh. Suman Aneja", "Sh. Mukesh Sachdeva", "Sh. Shribhagwan Bansal","Sh. Mukesh Sachdeva", "Sh. Shribhagwan Bansal", "Sh. Mukesh Sachdeva", "Sh. Shribhagwan Bansal",];

    // console.log("props: ",props);

    var {data, setFlag, setIndex, setName, index} = props;

  return (
    <Col lg={4} style={{marginBottom: 10}}>
        <Cards data={data} setFlag={setFlag}  setIndex={setIndex} index={index} setName={setName} />
    </Col>
  )
}

export default Middle