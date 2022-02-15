import React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { FaUserPlus, FaSearch } from "react-icons/fa";
import { NAV_TITLE } from "../../constants/lang";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyledComponents";

const SearchAppBar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {NAV_TITLE}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <FaSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={props.handleSearch}
            />
          </Search>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ flexGrow: 0, mx: 0.5, display: { xs: "none", sm: "block" } }}
            onClick={props.setOpenDialog}
          >
            <FaUserPlus />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchAppBar;
