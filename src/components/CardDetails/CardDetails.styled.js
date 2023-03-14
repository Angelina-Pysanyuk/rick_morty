import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  margin-top: 0;
`;

export const GoBackButtonWrapper = styled.div`
  margin-top: 23px;
  margin-bottom: 77px;
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;
  cursor: pointer;
  color: #97ce4c;
  font-size: 18px;
  line-height: 1.16;
  font-family: "Karla";
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #699035;
  }

  svg {
    margin-right: 12px;
  }
`;

export const CardDetailsImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardDetailsImage = styled.img`
  width: 150px;
  height: 148px;
  object-fit: cover;
  border: 5px solid #f2f2f7;
  border-radius: 50%;
`;

export const CardDetailsName = styled.h2`
  margin-top: 34px;
  font-size: 32px;
  line-height: 1.18;
  font-weight: 400;
  text-align: center;
`;

export const CardDetailsInfo = styled.div`
  margin: 35px auto;
`;

export const CardDetailsInfoTitle = styled.h3`
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
  color: #8e8e93;
`;

export const CardDetailsInfoList = styled.ul`
  margin-top: 25px;
  margin-left: 40px;
`;

export const CardDetailsInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 9px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);

  &:first-child {
    margin-top: 0;
  }
`;

export const CardDetailsInfoItemsecondary = styled.span`
  margin-bottom: 11px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42;
  color: #6e798c;
`;
