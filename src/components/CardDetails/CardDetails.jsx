import React from "react";
import PropTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa";
import {
  CardDetailsWrapper,
  GoBackButtonWrapper,
  GoBackButton,
  CardDetailsImageWrapper,
  CardDetailsImage,
  CardDetailsName,
  CardDetailsInfo,
  CardDetailsInfoTitle,
  CardDetailsInfoList,
  CardDetailsInfoItem,
  CardDetailsInfoItemsecondary,
} from "./CardDetails.styled";
import { Link } from "react-router-dom";

const CardDetails = ({ character }) => {
  return (
    <CardDetailsWrapper>
      <GoBackButtonWrapper>
        <Link to="/">
          <GoBackButton type="button">
            <FaArrowLeft size={24} />
            Go back
          </GoBackButton>
        </Link>
      </GoBackButtonWrapper>

      <CardDetailsImageWrapper>
        <CardDetailsImage
          src={character.image}
          alt={character.name}
        ></CardDetailsImage>
      </CardDetailsImageWrapper>
      <CardDetailsName>{character.name}</CardDetailsName>
      <CardDetailsInfo>
        <CardDetailsInfoTitle>Informations</CardDetailsInfoTitle>
        <CardDetailsInfoList>
          <CardDetailsInfoItem>
            Gender
            <CardDetailsInfoItemsecondary>
              {character.gender}
            </CardDetailsInfoItemsecondary>
          </CardDetailsInfoItem>

          <CardDetailsInfoItem>
            Status
            <CardDetailsInfoItemsecondary>
              {character.status}
            </CardDetailsInfoItemsecondary>
          </CardDetailsInfoItem>

          <CardDetailsInfoItem>
            Specie
            <CardDetailsInfoItemsecondary>
              {character.species}
            </CardDetailsInfoItemsecondary>
          </CardDetailsInfoItem>

          <CardDetailsInfoItem>
            Origin
            <CardDetailsInfoItemsecondary>
              {character.origin.name}
            </CardDetailsInfoItemsecondary>
          </CardDetailsInfoItem>

          <CardDetailsInfoItem>
            Type
            <CardDetailsInfoItemsecondary>
              {character.type}
            </CardDetailsInfoItemsecondary>
          </CardDetailsInfoItem>
        </CardDetailsInfoList>
      </CardDetailsInfo>
    </CardDetailsWrapper>
  );
};

CardDetails.propTypes = {
  characters: PropTypes.objectOf(
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

export default CardDetails;
