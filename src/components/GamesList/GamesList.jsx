import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGameByCategory, getGames } from '../../redux/gamesSlice/gamesSlice';

import shooterImg from '../../assets/img/shooter/shooter.jpg';
import mmorpgImg from '../../assets/img/mmorpg/mmorpg.jpg';
import strategyImg from '../../assets/img/strategy/strategy.jpg';
import fightingImg from '../../assets/img/fighting/fighting.jpg';
import battleRoyaleImg from '../../assets/img/battleRoyale/battleRoyale.jpg';
import mobaImg from '../../assets/img/moba/moba.jpg';
import sportsImg from '../../assets/img/sports/sports.jpg';
import cardGameImg from '../../assets/img/cardGame/cardGame.jpg';
import racingImg from '../../assets/img/racing/racing.jpg';
import socialImg from '../../assets/img/social/social.jpg';

const genreBackgroundConfig = {
  Shooter: shooterImg,
  Mmorpg: mmorpgImg,
  Strategy: strategyImg,
  Fighting: fightingImg,
  'Battle-Royale': battleRoyaleImg,
  Moba: mobaImg,
  Sports: sportsImg,
  'Card Game': cardGameImg,
  Racing: racingImg,
  Social: socialImg,
};

const GamesList = () => {
  const defaultCategories = useMemo(() => [
    'Shooter',
    'Mmorpg',
    'Strategy',
    'Fighting',
    'Moba',
    'Sports',
    'Racing',
    'Social',
  ], []);

  const [gameList, setgameList] = useState([defaultCategories]);
  const [selectedCategory, setSelectedCategory] = useState();
  const games = useSelector((state) => state.games.games);
  const dispatch = useDispatch();

  useEffect(() => {
    setgameList(defaultCategories);
  }, [defaultCategories]);

  const getFilteredList = () => {
    if (!selectedCategory || selectedCategory === '') {
      return gameList;
    }
    // eslint-disable-next-line max-len
    return gameList.filter((category) => category.toLowerCase().includes(selectedCategory.toLowerCase()));
  };

  const filteredList = useMemo(getFilteredList, [selectedCategory, gameList]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterCategoryLength = (genre) => {
    if (typeof genre !== 'string') {
      return 0;
    }
    return games.filter((game) => game.genre.toLowerCase() === genre.toLowerCase()).length;
  };

  useEffect(() => {
    if (games.length === 0) {
      dispatch(getGames());
    }
  }, [games, dispatch]);

  const handleDetailsPage = (genre) => () => {
    dispatch(getGameByCategory(genre));
  };

  return (
    <Section>
      <H2>
        Category
        <SearchInput
          type="text"
          name="category-search"
          id="category-search"
          placeholder="Search category..."
          onChange={handleCategoryChange}
        />
      </H2>
      <GridContainer>
        {filteredList.map((category) => (
          <Card key={category}>
            <Button
              type="button"
              style={{
                backgroundImage: `url(${genreBackgroundConfig[category]})`,
              }}
            >
              <StyledLink to={`/Details/${category}`}>
                <GameOverlay onClick={handleDetailsPage(category)}>
                  <Category>
                    {category}
                    {` (${filterCategoryLength(category)})`}
                  </Category>
                </GameOverlay>
              </StyledLink>
            </Button>
          </Card>
        ))}
      </GridContainer>
    </Section>
  );
};

const SearchInput = styled.input`
  width: 17rem;
  height: 2rem;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1.7rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e0decf;
`;
const Section = styled.section`
  margin: 0 auto;
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  margin: 0;
  padding: 0.2rem;
  padding-left: 1rem;
  background-color: #1e3276;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
  justify-items: center;
  background-color: #1e3276;
`;

const Button = styled.button`
width: 100%;
height: 15rem;
background-size: cover;
background-position: center;
position: relative;
border: 1px solid #9ca5c8;
cursor: pointer;
font-size: 1.5rem;
font-weight: 500;
border-radius: 16px;
margin: 4px;

@media (min-width: 768px) {
  height: 25rem;
}

@media (min-width: 1440px) {
  height: 35rem;
  font-size: 2rem;
}
`;

const GameOverlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Category = styled.p`
 margin: auto auto 0 auto;
 margin-bottom: 0.5rem;
 background-color: #010a16;
 padding: 0.5rem;
 border-radius: 8px;
 border: 1px solid #838aa8;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  border-radius: 16px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;

`;

export default GamesList;
