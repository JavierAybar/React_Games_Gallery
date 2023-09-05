import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import gameImg from '../../assets/imagen1.jpg';
import gameImg2 from '../../assets/imagen2.jpg';
import gameImg3 from '../../assets/imagen3.jpg';

function CarouselImg() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Img src={gameImg} alt="asd" data-testid="carousel-item-1" />
      </Carousel.Item>
      <Carousel.Item>
        <Img src={gameImg2} alt="asd" />
      </Carousel.Item>
      <Carousel.Item>
        <Img src={gameImg3} alt="asd" />
      </Carousel.Item>
    </Carousel>
  );
}

const Img = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: fill;
  
  @media (min-width: 768px) {
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    height: 45rem;
    object-fit: unset;
  }

  @media (min-width: 1440px) { 
    height: 85rem;
    object-fit: cover;
  }
  `;

export default CarouselImg;
