import {Container, Dropdown} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import profiles from './Profiles';
import history from './HistoryData';

function NavigationBar() {

    // var history = ["1893 to 1918", "1919 to 1943", "1944 to 1968", "1994 to 1999", "2000 to till date"];

  return (
    <div id="navbar">
        <Navbar bg="white" expand="lg" fixed="top" style={{textAlign: 'center'}}>
        <Container id="navbar-container">
            <Navbar.Brand href="#home">
                <img src='images/Logos/DHMA_logo.png' style={{height: 40, width: 40}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                    {profiles.map((item) => {
                        return <NavDropdown.Item href={"/" + item[2].Name}>{item[2].Name}</NavDropdown.Item>
                    })}
                    
                   
                    
                </NavDropdown>
                <Nav.Link href="pdf/completemc.pdf">MC</Nav.Link>
                <NavDropdown title="History" id="basic-nav-dropdown">
                    {history.map((item) => {
                        return <>
                            <NavDropdown.Item href={item.year}>{item.year}</NavDropdown.Item>
                            {/* <Dropdown.Divider /> */}
                        </>
                    })}                   
                </NavDropdown>
                <Nav.Link href="/magazine">Magazine</Nav.Link>
                <Nav.Link href="/arbitration">Arbitration</Nav.Link>
                <Nav.Link href="/constitution">Constitution</Nav.Link>
                <Nav.Link href="/download">Download</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
        
        <Container fluid id='nav-logo' className="bg-light">
            <img id='img1' src='images/Logos/DHMA_logo.png' />
            <img id='img2' src='images/Logos/DHMA_desc.jpg' />
        </Container>
    </div>
  );
}

export default NavigationBar;