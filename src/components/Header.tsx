import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Header = () => (
  <div className="header-class">
    <HeaderContainer>
      <Title>Coffee Shop POS</Title>
    </HeaderContainer>
  </div>
);

export default Header;
