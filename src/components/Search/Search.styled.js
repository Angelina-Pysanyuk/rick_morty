import styled from "styled-components";

export const SearchForm = styled.form`
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 2px solid #97ce4c;
  border-radius: 8px;
  padding: 16px 16px 16px 48px;
  font-weight: 400px;
  font-size: 16px;
  line-height: 1.5;

  &:focus {
    outline: none;
    border: 2px solid #699035;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  display: flex;
  top: 50%;
  left: 16px;

  background: none;
  border: none;
  transform: translateY(-50%);
`;

export const SearchWrapper = styled.div`
  position: relative;
`;
