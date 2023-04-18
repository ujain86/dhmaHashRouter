import React from 'react';
import {Container, Button} from 'react-bootstrap';

function About() {
  return (
    <Container className="p-3" id="about">
        <h3>About DHMA</h3>
        <p>
            Delhi Hindustani Merchantile Association is an association of Cloth Traders, Textile Mill Owners, Bankers, Transporters and Importers working from more than 125 years. DHMA has got a history of more than 125 years but the official records are available only from 1893 when DHMA came into force on papers. Its formation was during the British rule in India.
        </p>
        {/* <p>
            Probably DHMA is the only Association in India which is having its own written Constitution from 1893 and still working on the written Constitution till today.  The Constitution of DHMA is so strongly made by our forefathers that till today all the other Associations in any trade follow the Constitution of DHMA. The constitution is being amended from time to time due to necessary requirements of the trade.
        </p> */}

        <Button href="/about" variant="outline-dark">More</Button>
    </Container>
  )
}

export default About