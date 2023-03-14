import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #87b944;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
  min-width: 130px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  &:hover,
  &:focus {
    background-color: #699035;
  }
`;
