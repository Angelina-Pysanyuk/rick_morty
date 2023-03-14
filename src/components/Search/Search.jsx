import React from "react";
import { IoMdSearch } from "react-icons/io";
import {
  SearchForm,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./Search.styled";

const Search = ({ setCharacters }) => {
  return (
    <SearchForm>
      <SearchWrapper>
        <SearchIcon>
          <IoMdSearch size={24} color="rgba(0, 0, 0, 0.54)" />
        </SearchIcon>
        <SearchInput
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Filter by name..."
          onChange={setCharacters}
        />
      </SearchWrapper>
    </SearchForm>
  );
};

export default Search;
