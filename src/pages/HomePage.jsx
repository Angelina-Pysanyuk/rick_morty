import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchCharacters, fetchSearch } from "../api";
import Logo from "../components/Logo/Logo";
import Loader from "../components/Loader/Loader";
import Search from "../components/Search/Search";
import CardsGallery from "../components/CardsGallery/CardsGallery";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";
import ScrollButton from "../components/ScrollToTop/ScrollToTop";

function HomePage() {
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function findCharacters() {
      try {
        setLoader(true);
        const response = await fetchCharacters(page);
        setCharacters([...characters, ...response]);
        setLoader(false);
        if (page >= Math.ceil(response.totalHits / 20)) {
          return setShowButton(false);
        }

        setShowButton(true);
      } catch (error) {
        setError(error);
      }
    }

    findCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const changeFilter = async ({ target: { value } }) => {
    if (error) return;
    try {
      const response = await fetchSearch(value.toLowerCase());
      if (!value) return setFilter([]);
      setFilter(response);
    } catch (error) {
      return toast["error"]("Sorry, there is no such character");
    }
  };

  const getFilteredCharacter = () => {
    if (filter && filter.length) return filter;
    return characters;
  };
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div>
      <Logo />
      <Search setCharacters={changeFilter} />
      <CardsGallery characters={getFilteredCharacter()} />
      {showButton && !filter.length && !loader && (
        <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>
      )}
      {loader && <Loader />}
      <ScrollButton />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default HomePage;
