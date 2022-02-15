import React, { useState } from "react";
import { Container, Fab, Button, Grid } from "@mui/material";
import AddForm from "./components/AddForm";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";
import { FaUserPlus } from "react-icons/fa";
import "./App.css";

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
  const handleFilter = (type) => {
    setFilter(type);
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
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {filter === "" ? (
            <Button variant="contained" disabled>
              All
            </Button>
          ) : (
            <Button variant="contained" onClick={() => handleFilter("")}>
              All
            </Button>
          )}
          {filter === "favourite" ? (
            <Button variant="contained" disabled>
              Favourites
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => handleFilter("Favourite")}
            >
              Favourites
            </Button>
          )}
          {filter === "friend" ? (
            <Button variant="contained" disabled>
              Friends
            </Button>
          ) : (
            <Button variant="contained" onClick={() => handleFilter("Friend")}>
              Friends
            </Button>
          )}
          {filter === "family" ? (
            <Button variant="contained" disabled>
              Family
            </Button>
          ) : (
            <Button variant="contained" onClick={() => handleFilter("Family")}>
              Family
            </Button>
          )}
          {filter === "business" ? (
            <Button variant="contained" disabled>
              Business
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => handleFilter("Business")}
            >
              Business
            </Button>
          )}
          {filter === "other" ? (
            <Button variant="contained" disabled>
              Other
            </Button>
          ) : (
            <Button variant="contained" onClick={() => handleFilter("Other")}>
              Other
            </Button>
          )}
          |
          <Button variant="contained" onClick={toggleGrid}>
            Toggle Grid
          </Button>
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
