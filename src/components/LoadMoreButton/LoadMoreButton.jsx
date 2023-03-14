import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper, Button } from "./LoadMoreButton.styled";

const LoadMoreButton = ({ children, onClick }) => (
  <ButtonWrapper>
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  </ButtonWrapper>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoadMoreButton;
