import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import captura2 from '../../assets/Captura de pantalla 2023-08-30 203153.png';
import capturta from '../../assets/Captura de pantalla 2023-08-23 193816.png';

function CarouselImg() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Img src={capturta} alt="asd" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img src={captura2} alt="asd" />
        <Carousel.Caption>

          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img src={capturta} alt="asd" />
        <Carousel.Caption>

          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Img = styled.img`
  width: 100%;
  height: 28rem;
  object-fit: cover;`;

export default CarouselImg;
