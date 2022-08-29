import React from "react";
import styled from "styled-components";

import Banner from "../assets/banner.png";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredContent = styled.div`
  width: 100%;
  max-width: 855px;
  padding: 26px 0;
  transition: all 1s;
`;

const HeroImg = styled.img`
  width: auto;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-top: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 110%;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 110%;
`;

function Hero() {
  return (
    <Wrapper>
      <CenteredContent>
        <HeroImg src={Banner} />
        <Title>Online Experiences</Title>
        <Text>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </Text>
      </CenteredContent>
    </Wrapper>
  );
}

export default Hero;
