import styled from 'styled-components';

const SneakerList = () => (
  <section>
    <H2>Category</H2>
    <GridContainer>
      <Button type="button">Adidas</Button>
      <Button type="button">Nike</Button>
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
  grid-template-columns: repeat(2, 1fr);
  gap: 0.1rem;
`;

const Button = styled.button`
width: 100%;
height: 15rem;
`;

export default SneakerList;
