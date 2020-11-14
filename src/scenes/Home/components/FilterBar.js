import { observer } from "mobx-react";
import React from "react";
import FilterBarArrowIcon from "../../../icons/FilterBarArrowIcon";
import FilterBarGridIcon from "../../../icons/FilterBarGridIcon";
import {
  FilterBarCategoryContainer,
  FilterBarCategoryText,
  FilterBarContainer,
  FilterBarMainContainer,
  FilterBarPriceContainer,
  FilterBarPriceText,
  FilterBarSeparator,
} from "./FilterBar.styles";

const FilterBar = observer(() => {
  return (
    <FilterBarMainContainer>
      <FilterBarContainer>
        <FilterBarCategoryContainer>
          <FilterBarGridIcon />
          <FilterBarCategoryText>Choose Category</FilterBarCategoryText>
          <FilterBarArrowIcon />
        </FilterBarCategoryContainer>
        <FilterBarPriceContainer>
          <FilterBarPriceText>Price from (USD)</FilterBarPriceText>
        </FilterBarPriceContainer>
        <FilterBarSeparator></FilterBarSeparator>
        <FilterBarPriceContainer>
          <FilterBarPriceText>Price to (USD)</FilterBarPriceText>
        </FilterBarPriceContainer>
      </FilterBarContainer>
    </FilterBarMainContainer>
  );
});

export default FilterBar;
