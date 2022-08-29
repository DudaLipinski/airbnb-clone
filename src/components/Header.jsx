import React from "react";
import styled from "styled-components";
import AirbnbLogo from "../assets/airbnb.png";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70px;
  background-color: #ffffff;
  box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
`;

const CenteredContent = styled.div`
  width: 100%;
  max-width: 855px;
  transition: all 1s;
`;

const Logo = styled.img`
  width: 110px;
  height: auto;
`;

function Header() {
  return (
    <Wrapper>
      <CenteredContent>
        <Logo src={AirbnbLogo} />
      </CenteredContent>
    </Wrapper>
  );
}

export default Header;
