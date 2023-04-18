import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';

function Footer2() {
  return (
    <>
        <Container fluid>
            <div id='footer-divider'></div>
        </Container>
        <Container id='footer' className='p-3'>
            <Row>
                <Col>
                    <h5>Links</h5>
                    <Nav className='flex-column'>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/">Home</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/completemc.pdf">Managing Committee</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/about">About DHMA</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/constitution">DHMA Constituion</Nav.Link>
                        {/* <Nav.Link className=' mb-2 p-0 text-muted' href="/arbitration">Arbitration</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/download">Download</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/contactus">Contact Us</Nav.Link> */}
                    </Nav>
                </Col>

                <Col>
                    <h5>Links</h5>
                    <Nav className='flex-column'>
                        {/* <Nav.Link className=' mb-2 p-0 text-muted' href="/">Home</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/completemc.pdf">Managing Committee</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/about">About DHMA</Nav.Link> */}
                        {/* <Nav.Link className=' mb-2 p-0 text-muted' href="/constitution">DHMA Constituion</Nav.Link> */}
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/arbitration">Arbitration</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/download">Download</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/contactus">Contact Us</Nav.Link>
                    </Nav>
                </Col>

                <Col>
                    <h5>Profiles</h5>
                    <Nav className='flex-column'>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/Sh. Mukesh Sachdeva">President</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/Sh. Shribhagwan Bansal">General Secretary</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/Sh. Bhim Sen Dhingra">Sr. Vice President</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/Sh. Suman Aneja">Vice President</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/Sh. Anil Saini">Secretary</Nav.Link>
                                               
                    </Nav>
                </Col>
                <Col>
                    <h5>Profiles</h5>
                        <Nav className='flex-column'>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/Sh. Ram Parkash Bansal">Joint Secretary</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/Sh. Ramesh Garg">Treasurer</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/Sh. Ganpat Rai Ahuja">Sanghtan Mantri</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="/Sh. Bharat Jain">Prachar Mantri</Nav.Link>
                        
                    </Nav>
                </Col>

                <Col>
                    <h5>Others</h5>
                    <Nav className='flex-column'>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/president_all.jpg">President since 1893</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Genl_Secy_All.jpg">Gen. Secretary since 1893</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/All_Life_Time_Achivment_Award_Winner.pdf">Life Time Achievement Award Winner</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Agenda26sept18.pdf">Agenda</Nav.Link>
                        {/* <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Invitation_Card_123_Annual_Meeting.jpg">Invitation</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Objectives_of_DHMA.pdf">Objective of DHMA</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Report_Adhivashion.pdf">Report</Nav.Link> */}
                    </Nav>
                </Col>
                <Col>
                    <h5>Others</h5>
                    <Nav className='flex-column'>
                        {/* <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/president_all.jpg">President since 1893</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Genl_Secy_All.jpg">Gen. Secretary since 1893</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/All_Life_Time_Achivment_Award_Winner.pdf">Life Time Achievement Award Winner</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Agenda26sept18.pdf">Agenda</Nav.Link> */}
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Invitation_Card_123_Annual_Meeting.jpg">Invitation</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Objectives_of_DHMA.pdf">Objective of DHMA</Nav.Link>
                        <Nav.Link className=' mb-2 p-0 text-muted' href="pdf/Report_Adhivashion.pdf">Report</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer2