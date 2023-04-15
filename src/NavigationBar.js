import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <div id="navbar">
        <Navbar bg="white" expand="lg" fixed="top" style={{textAlign: 'center'}}>
        <Container id="navbar-container">
            <Navbar.Brand href="#home">
                <img src='https://dhmatextileassociation.com/images/aa.png' style={{height: 40, width: 40}} />
                {/* <img src='https://dhmatextileassociation.com/images/11.jpg' /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">MC</Nav.Link>
                <NavDropdown title="History" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Magzine</Nav.Link>
                <Nav.Link href="#link">Arbitration</Nav.Link>
                <Nav.Link href="#link">Events</Nav.Link>
                <Nav.Link href="#link">Constitution</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
        {/* <div style={{border: "1px solid black", marginTop: 70}}></div> */}
        <Container fluid id='nav-logo' className="bg-light">
            <img id='img1' src='https://dhmatextileassociation.com/images/aa.png' />
            <img id='img2' src='https://dhmatextileassociation.com/images/11.jpg' />
        </Container>
    </div>
  );
}

export default NavigationBar;