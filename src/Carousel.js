import {Container, Carousel, Row, Col} from 'react-bootstrap';
// import './data/images/DHMA_desc';

function Carousell() {

    var images = [1,2,3,4,5,6,7,8];
    
  return (
    <Container id="carousel">
        <Row>
            <Col lg={12}>
                <Carousel>
                    {images.map((item) => {
                        return(
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={"images/carousel/" + item + ".jpg"}
                                alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Col>
        </Row>
    </Container>
  );
}

export default Carousell;