import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  bottom: 16px;
  right: 20px;

  width: 60px;
  height: 60px;
  font-size: 4rem;
  z-index: 1;
  cursor: pointer;
  color: #97ce4c;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #699035;
  }
`;
