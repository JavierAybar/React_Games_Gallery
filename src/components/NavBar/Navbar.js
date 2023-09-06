import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ArrowBack, MicrophoneSvg, SettingSvg } from '../../assets/images';
import { clearGameByCategory } from '../../redux/gamesSlice/gamesSlice';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClearGameByCategory = () => {
    dispatch(clearGameByCategory());
  };

  return (
    <Nav>
      {location.pathname.includes('/Details') ? (
        <StyledLink to="/" onClick={handleClearGameByCategory}>
          <ArrowBack />
        </StyledLink>
      )
        : (
          null
        )}
      <Title>Game gallery</Title>
      <Ul className="navbar__container-links">
        <Li className="navbar-container__svg">
          <MicrophoneSvg />
        </Li>
        <Li className="navbar-container__svg">
          <SettingSvg />
        </Li>
      </Ul>
    </Nav>
  );
};
const Li = styled.li`
  width: 25px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 5rem;
  background-color: #1e3276;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: sticky;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  width: 100%;
  margin-left: 5.4rem;
  text-align: center;
  word-spacing: 0.2rem;
`;

const StyledLink = styled(Link)`
  width: 4rem;
  cursor: pointer;
  color: #000;
`;

export default Navbar;
