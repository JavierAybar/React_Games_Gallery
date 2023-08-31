import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import capturta from '../assets/Captura de pantalla 2023-08-31 134952.png';

const Details = () => (
  <section>
    <Carousel>
      <Carousel.Item>
        <Img src={capturta} alt="asd" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <H2>Sneakers</H2>
    <GridContainer>
      <Button type="button">jordan</Button>
      <Button type="button">yad</Button>
      <Button type="button">Adidas</Button>
      <Button type="button">Nike</Button>
      <Button type="button">Adidas</Button>
      <Button type="button">Nike</Button>
    </GridContainer>
  </section>
);

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.1rem;
`;

const Button = styled.button`
width: 100%;
height: 10rem;
`;

const Img = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: cover;`;

export default Details;
