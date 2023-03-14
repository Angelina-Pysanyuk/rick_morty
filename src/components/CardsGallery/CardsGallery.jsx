import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import { List } from "./CardsGallery.styled";

const CardsGallery = ({ characters, showDetails }) => {
  return (
    <List>
      {characters.map((item) => (
        <Card key={item.id} character={item} showDetails={showDetails} />
      ))}
    </List>
  );
};

CardsGallery.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      status: PropTypes.string,
      species: PropTypes.string,
      type: PropTypes.string,
      gender: PropTypes.string,
      image: PropTypes.string,
      origin: PropTypes.object,
    })
  ),
};

export default CardsGallery;
