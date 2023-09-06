import styled from 'styled-components';
import gameImg from '../../assets/imagen1.jpg';

function CarouselImg() {
  return (
    <Section>
      <Img src={gameImg} alt="asd" data-testid="carousel-item-1" />
      <Div>
        <H2>
          {' '}
          Total Games
          <br />
          (339)
        </H2>
      </Div>
    </Section>
  );
}

const H2 = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 3rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
  `;

const Div = styled.div`
  width: 50%;
  background-color: #3e60d2;
  display: flex;
  align-items: center;
  `;

const Section = styled.section`
  margin: 0 auto;
  display: flex;
`;

const Img = styled.img`
  width: 50%;
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
