import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  display: flex;
  background: gray;
  border-bottom: 1px solid;
  justify-content: center;
  align-items: center;
  width: 100svw;
  height: 5svh;
  color: white;
`;
export const NavBarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 2svw;
  &:hover,
  &:focus {
    color: rgb(207, 219, 219);
    text-decoration: underline;
    transition: 0.3s;
  }
`;
export const Logged = styled.em`
  color: white;
  padding: 0 5px 0 0;
  justify-self: left;
`;
