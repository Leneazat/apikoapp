import React from "react";
import SearchBarIconLocation from "../../../../icons/SearchBarIconLocation";
import SearchBarIconSearch from "../../../../icons/SearchBarIconSearch";
import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarInputContainer,
  StyledInput,
} from "./SearchBar.styles";

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarInputContainer flex={2}>
        <SearchBarIconSearch />
        <StyledInput placeholder='Search products by name'></StyledInput>
      </SearchBarInputContainer>
      <SearchBarInputContainer flex={1}>
        <SearchBarIconLocation />
        <StyledInput placeholder='Location'></StyledInput>
      </SearchBarInputContainer>
      <SearchBarButton>Search</SearchBarButton>
    </SearchBarContainer>
  );
};
