import React from "react";
import styled from "styled-components";
import Star from "../assets/star.png";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 855px;
  margin-bottom: 50px;
  transition: all 1s;
`;

const CardItem = styled.article`
  width: 250px;
  padding: 0 15px;

  :last-child {
    padding: 0 0 0 15px;
  }

  :first-child {
    padding: 0 15px 0 0;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 340px;
  border-radius: 9px;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;

  border: 0px solid;
  border-radius: 3px;
  background-color: #ffffff;
  padding: 5px 10px;

  font-weight: 400;
  font-size: 12px;
  color: #222222;
`;

const Review = styled.div`
  display: flex;

  img {
    margin-top: 5px;
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }

  p {
    margin: 0;
    margin-right: 5px;
  }

  span {
    color: #918e9b;
    margin-right: 5px;
  }
`;

const Country = styled.span`
  display: list-item;
  list-style-type: initial;
  list-style-position: inside;
  color: #918e9b;
`;

const Description = styled.p`
  margin: 0;
  color: #222222;
`;

const Price = styled.p`
  margin: 0;
  color: #222222;
`;

const getCard = ({
  id,
  title,
  price,
  coverImg,
  stats,
  location,
  openSpots,
}) => (
  <CardItem key={id}>
    <Button>{openSpots > 0 ? "ONLINE" : "SOLD OUT"}</Button>
    <CardImg src={`src/assets/${coverImg}`} />
    <Review>
      <img src={Star}></img>
      <p>{stats.rating}</p>
      <span>({stats.reviewCount})</span>
      <Country>{location}</Country>
    </Review>
    <Description>{title}</Description>
    <Price>
      <b>From ${price}</b> / person
    </Price>
  </CardItem>
);

const Card = ({ cards }) => (
  <Wrapper>
    <CenteredContent>{cards.map(getCard)}</CenteredContent>
  </Wrapper>
);

export default Card;
