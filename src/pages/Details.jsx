import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGameByCategory } from '../redux/gamesSlice/gamesSlice';

import shooterImg from '../assets/img/shooter/shooter.jpg';
import mmorpgImg from '../assets/img/mmorpg/mmorpg.jpg';
import strategyImg from '../assets/img/strategy/strategy.jpg';
import fightingImg from '../assets/img/fighting/fighting.jpg';
import battleRoyaleImg from '../assets/img/battleRoyale/battleRoyale.jpg';
import mobaImg from '../assets/img/moba/moba.jpg';
import sportsImg from '../assets/img/sports/sports.jpg';
import cardGameImg from '../assets/img/cardGame/cardGame.jpg';
import racingImg from '../assets/img/racing/racing.jpg';
import socialImg from '../assets/img/social/social.jpg';

const genreBackgroundConfigDetails = {
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

const Details = () => {
  const gameByCategory = useSelector((state) => state.games.gameByCategory);
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (gameByCategory.length === 0) {
      dispatch(getGameByCategory(category));
    }
  }, [category, dispatch, gameByCategory]);

  return (
    <section>
      <ImgContainer>
        <Img src={genreBackgroundConfigDetails[category]} alt={category} />
        <CaptionImg>{category}</CaptionImg>
      </ImgContainer>
      <H2>{category}</H2>
      <GridContainer>
        {gameByCategory.map((game) => (
          <Button key={game.id} type="button">
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              <GameImg src={game.thumbnail} alt={game.title} />
            </a>
            <ContainerDetails>
              <GameName>{game.title}</GameName>
              <div>
                <DescriptionDetail>
                  Platform:
                </DescriptionDetail>
                <span>{game.platform}</span>
              </div>
              <div>
                <DescriptionDetail>
                  Developed:
                </DescriptionDetail>
                <span>{game.developer}</span>
              </div>
              <div>
                <DescriptionDetail>
                  Release Date:
                </DescriptionDetail>
                <span>{game.release_date}</span>
              </div>
              <div>
                <DescriptionDetail>
                  Description:
                </DescriptionDetail>
                <span>{game.short_description}</span>
              </div>
            </ContainerDetails>
          </Button>
        ))}
      </GridContainer>
    </section>
  );
};

const ImgContainer = styled.div`
  position: relative;
`;

const CaptionImg = styled.span`
position: absolute;
top: 85%;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgb(78 78 78 / 70%);
color: rgb(24 23 23);
padding: 1px 15px;
border-radius: 8px;
font-size: 4rem;
font-weight: 900;
`;

const DescriptionDetail = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  margin-right: 0.3rem;
`;

const GameName = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  width: 98%;
  border-radius: 8px;
  margin: 0.5rem 0;

  background-color: #0a1018;
  background-image: linear-gradient(to right, #5b7ba7, #081d35);
  color: #fff;
  font-weight: 200;
  padding: .5rem;
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  background-color: #0a1018;
  background-image: linear-gradient(to right, #203c62, #4a627d);
  color: #fff;
  font-weight: 200;
  padding: 0.3rem;
  padding-left: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;
  background-color: #0a1018;
  background-image: linear-gradient(to right, #0a1018, #272e36);
  > :nth-child(1n){
    color: #fff
  }

  > :nth-child(2n) {
    background-color: #364e75;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Button = styled.button`
width: 98%;
display: flex;
justify-content: space-between;
border: none;
border-radius: 12px;
background-color: #314260;
`;

const Img = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: cover;
  
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

const GameImg = styled.img`
  width: 125px;
  min-height: 140px;
  height: 94%;
  object-fit: cover;
  border-radius: 8px;
  margin: 0.5rem;
`;

const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-align: left;
  padding-bottom: 0.4rem;
`;

export default Details;
