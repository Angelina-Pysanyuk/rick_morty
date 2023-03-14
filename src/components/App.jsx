import { Routes, Route } from "react-router-dom";
import { Container } from "./App.styled";

import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:characterId" element={<DetailsPage />} />
      </Routes>
    </Container>
  );
};
