import React, { useState } from "react";
import {
  Container,
  Fab,
  Button,
  Grid,
  FormControl,
  MenuItem,
  Select,
  Box,
  InputLabel,
} from "@mui/material";
import AddForm from "./components/AddForm";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";
import { FaUserPlus } from "react-icons/fa";
import { filterList } from "./constants/filters";
import { RiGridFill } from "react-icons/ri";
import "./App.css";
import { FILTER_TITLE, TOGGLE_GRID } from "./constants/lang";

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [filter, setFilter] = useState("");
  const [gridCheck, setGrid] = useState(0);
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleClickOpen = () => setOpenDialog(true);
  const toggleGrid = () => {
    const size = [12, 6, 4, 3];
    if (count < size.length - 1) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount(0);
    }
    setGrid(size[count]);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Navbar setOpenDialog={setOpenDialog} handleSearch={handleSearch} />
      <Container maxWidth="lg">
        <Grid
          item
          xs={12}
          alignItems="center"
          justifyContent={"end"}
          paddingTop={1.5}
          margin={0.5}
          display="flex"
        >
          <Box pl={1} sx={{ flexGrow: { xs: 1, sm: 0.2 } }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {FILTER_TITLE}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ background: "#ffffff" }}
                value={filter}
                label={FILTER_TITLE}
                onChange={handleFilter}
              >
                {filterList.map(({ value, label }) => {
                  return <MenuItem value={value}>{label}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <Box pl={1} sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              size="large"
              variant="contained"
              startIcon={<RiGridFill />}
              onClick={toggleGrid}
            >
              {TOGGLE_GRID}
            </Button>
          </Box>
        </Grid>
        <ContactList
          searchQuery={searchQuery}
          gridCheck={gridCheck}
          filter={filter}
        />
      </Container>
      <Fab
        color="primary"
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
        sx={{ display: { xs: "display", sm: "none" } }}
        onClick={() => handleClickOpen()}
      >
        <FaUserPlus />
      </Fab>
      <AddForm openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </>
  );
}

export default App;
