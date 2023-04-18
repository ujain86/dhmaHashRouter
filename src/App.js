import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Carousel from './Carousel';
import Cards from './Cards';
import Middle from './Middle';
import About from './About';
import Profile from './Profile';
import profiles from './Profiles';
import AboutMore from './AboutMore';
import History from './History';
import {Routes, Route} from 'react-router-dom';
import Footer from './Footer';


function App() {

  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [about, setAbout] = useState(false);
  var [index, setIndex] = useState();

  return (
    <>
      <NavigationBar />  
      
      <Container className="mt-4">
        <Row>
          {<Col lg={7}>
            <Carousel/>   
          </Col>}

          <Col>
            <About />      
          </Col>
        </Row>
      </Container>

      <Container  id="dynamic-container" className='mt-4'>

        <Routes>
          <Route path='/about' element={
            <>            
            <div style={{width: '100%', height: 50}} className="bg-white mb-4">
              <h4 style={{textAlign: 'center'}} className='p-2'>About</h4>
            </div>
            <AboutMore />
            </>
          }>
          </Route>

          <Route path='/' element={
            <Row>
              <div style={{width: '100%', height: 50}} className="bg-white mb-4">
                <h4 style={{textAlign: 'center'}} className='p-2'>Office Bearer Corner</h4>
              </div>
              {profiles.map((item, i) => {
                return <Middle data={item} key={index} setFlag={setFlag} setIndex={setIndex} index={i} setName={setName} />
              })}
            </Row>
          }></Route>

          <Route path='/Sh. Mukesh Sachdeva' element={
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[0]}/>
              </Col>
          </Row>
          }></Route>

          <Route path='/Sh. Shribhagwan Bansal' element={
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[1]}/>
              </Col>
          </Row>
          }></Route>

          <Route path='/Sh. Bhim Sen Dhingra' element={
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[2]}/>
              </Col>
          </Row>
          }></Route>

          <Route path='/Sh. Suman Aneja' element={
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[3]}/>
              </Col>
          </Row>
          }></Route>

          <Route path='/Sh. Anil Saini' element={
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[4]}/>
              </Col>
          </Row>
          }></Route>

          <Route path='/Sh. Ram Parkash Bansal' element={
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[5]}/>
              </Col>
          </Row>
          }></Route>

          <Route path='/Sh. Ramesh Garg' element={
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[6]}/>
              </Col>
          </Row>
          }></Route>

          <Route path='/Sh. Ganpat Rai Ahuja' element={
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[7]}/>
              </Col>
          </Row>
          }></Route>

          <Route path='/Sh. Bharat Jain' element={
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[8]}/>
              </Col>
          </Row>
          }></Route>

          <Route path='/1893 to 1918' element={<History index={0} />}></Route>
          <Route path='/1919 to 1943' element={<History index={1} />}></Route>
          <Route path='/1944 to 1968' element={<History index={2} />}></Route>
          <Route path='/1969 to 1993' element={<History index={3} />}></Route>
          <Route path='/1994 to 1999' element={<History index={4} />}></Route>
          <Route path='/2000 to Till Date' element={<History index={5} />}></Route>

        </Routes>
      
      </Container>
      <Container className='mt-5'>
        <Footer />
      </Container>
    </>
  )
}

export default App;

{/* <Container className='mt-2'>
          <AboutMore />
        </Container> */}

        {/* <Container className='mt-2'>
          {flag?
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <Profile data={profiles[index]}/>
              </Col>
            </Row>
            
            :
            <Row>
              {profiles.map((item, i) => {
                return <Middle data={item} key={index} setFlag={setFlag} setIndex={setIndex} index={i} />
              })}
            </Row>
          }
        </Container> */}