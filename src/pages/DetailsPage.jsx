import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../api";
import CardDetails from "../components/CardDetails/CardDetails";

function DetailsPage() {
  const [details, setDetails] = useState(null);
  const { characterId } = useParams();

  useEffect(() => {
    if (!characterId) return;
    const getCharacterDetails = async () => {
      try {
        const details = await fetchDetails(characterId);
        setDetails(details);
      } catch (error) {
        alert("error");
      }
    };

    getCharacterDetails();
  }, [characterId]);

  return <div>{details && <CardDetails character={details} />}</div>;
}

export default DetailsPage;
