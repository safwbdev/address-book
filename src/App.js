import React, { useState } from "react";
import { Container, Fab, Button, Grid } from "@mui/material";
import AddForm from "./components/AddForm";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";
import { FaUserPlus } from "react-icons/fa";
import "./App.css";

function App() {
  const [openDialog, setOpenDialog] = useState(false);
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
          <Button variant="contained" onClick={toggleGrid}>
            Toggle Grid
          </Button>
        </Grid>
        <ContactList searchQuery={searchQuery} gridCheck={gridCheck} />
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
