import { Box,} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import SearchBarProps from "../interface/SearchBarProps";
import Button from "./common/Button";

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { handleSearchTerm, placeholder, searchTerm, handleButtonClick } = props;

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon />
          <input
            size={40}
            type="text"
            placeholder={placeholder}
            onChange={handleSearchTerm}
            value={searchTerm}
          />
          <Button onClick={handleButtonClick} bgcolor='primary'>
            Clear
          </Button>
      </Box>
    </>
  );
};

export default SearchBar;
