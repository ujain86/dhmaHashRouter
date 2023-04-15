import React from 'react';
import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Carousel from './Carousel';
import Cards from './Cards';
import Middle from './Middle';
import About from './About';
import Profile from './Profile';
import profiles from './data/files/Profiles';

function App() {

  const [flag, setFlag] = useState(false);
  var [index, setIndex] = useState();

  return (
    <>
      <NavigationBar />  

      <Container  id="dynamic-container">
        <Container className="mt-4">
          <Row>
            <Col lg={6}>
              <Carousel/>   
            </Col>

            <Col>
              <About />      
            </Col>
          </Row>
        </Container>

        <Container className='mt-2'>
          {flag?
            <Row>
              {/* <Col lg={2}></Col> */}
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[index]}/>
              </Col>
              {/* <Col lg={2}></Col> */}
              

            </Row>
            
            :
            <Row>
              {profiles.map((item, i) => {
                return <Middle data={item} key={index} setFlag={setFlag} setIndex={setIndex} index={i} />
              })}
            </Row>
          }
        </Container>
      </Container>
    </>
  )
}

export default App