import styled from 'styled-components';
import gameImg from '../../assets/imagen1.jpg';

function CarouselImg() {
  return (
    <Section>
      <Img src={gameImg} alt="asd" data-testid="carousel-item-1" />
    </Section>
  );
}

const Section = styled.section`
  margin: 0 auto;
  display: flex;
`;

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
