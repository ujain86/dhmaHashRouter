import {Container, Carousel, Row, Col} from 'react-bootstrap';
// import './data/images/DHMA_desc';

function Carousell() {
  return (
    <Container id="carousel">
        <Row>
            <Col lg={12}>
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dhmatextileassociation.com/images/Agilent_Technologies_banner.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= "https://dhmatextileassociation.com/images/Join_IESA_Web_banner.jpg"
                    alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://dhmatextileassociation.com/images/3.jpg"
                    alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Container>
  );
}

export default Carousell;