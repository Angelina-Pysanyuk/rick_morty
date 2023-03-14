import React from "react";
import PropTypes from "prop-types";
import {
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  CharacterSpecies,
} from "./Card.styled";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
  return (
    <>
      <CharacterCard>
        <Link to={`/details/${character.id}`}>
          <CharacterImage
            src={character.image}
            alt={character.name}
          ></CharacterImage>
          <CharacterInfo>
            <CharacterName>{character.name}</CharacterName>
            <CharacterSpecies>{character.species}</CharacterSpecies>
          </CharacterInfo>
        </Link>
      </CharacterCard>
    </>
  );
};

Card.propTypes = {
  characters: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  showDetails: PropTypes.func,
};

export default Card;
