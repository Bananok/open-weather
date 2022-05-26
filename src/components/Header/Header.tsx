import React from "react";

import { selectors, useAppSelector } from "store";
import styled from "styled-components";
const Header: React.FC<HeaderProps> = () => {
  const currentCity = useAppSelector(selectors.weather.getCurrentCity);
  return (
    <Root>
      Ниже представлена погода на ближайшие 6 дней в городе {currentCity}
    </Root>
  );
};
interface HeaderProps {}

export default Header;

const Root = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 800;
  color: rgb(63, 92, 189);
  padding-bottom: 50px;
`;
