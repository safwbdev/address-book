import React from "react";
import ContactCard from "./ContactCard";
import { Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/action/contactActions";
import { NO_RESULTS, EMPTY_LIST_A, EMPTY_LIST_B } from "../../constants/lang";

const Index = ({ searchQuery, filter, gridCheck }) => {
  const listState = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const handleRemove = (id) => dispatch(removeContact(id));

  let collection = listState.sort((a, b) => a.name.localeCompare(b.name));

  if (searchQuery.length > 0) {
    collection = collection.filter((val) => {
      return val.name
        .toLocaleLowerCase()
        .match(searchQuery.toLocaleLowerCase());
    });
  }
  console.log(filter);

  return (
    <Grid
      container
      spacing={2}
      style={{ margin: "1em 0 30em 0", width: "100%" }}
    >
      {listState.length === 0 && (
        <Grid
          style={{
            display: "flex",
            flex: 1,
            height: "70vh",
            alignItems: "center",
            justifyContent: "center",
            flexFlow: "column",
          }}
        >
          <Typography variant="h6" color="white">
            {EMPTY_LIST_A}
          </Typography>
          <br />
          <Typography variant="h6" color="white" align="center">
            {EMPTY_LIST_B}
          </Typography>
        </Grid>
      )}
      {listState.length >= 1 && collection.length === 0 && (
        <Grid
          style={{
            display: "flex",
            flex: 1,
            height: "30vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="white">
            {NO_RESULTS}
          </Typography>
        </Grid>
      )}
      {collection.map((val) => {
        if (filter === val.category) {
          return (
            <Grid
              item
              key={val.id}
              xs={12}
              sm={gridCheck}
              md={gridCheck}
              sx={{
                padding: { xs: "1em 0 !important", sm: "0.5em !important" },
              }}
            >
              <ContactCard data={val} handleRemove={handleRemove} />
            </Grid>
          );
        } else if (filter === "Favourite" && val.favorite === true) {
          return (
            <Grid
              item
              key={val.id}
              xs={12}
              sm={gridCheck}
              md={gridCheck}
              sx={{
                padding: { xs: "1em 0 !important", sm: "0.5em !important" },
              }}
            >
              <ContactCard data={val} handleRemove={handleRemove} />
            </Grid>
          );
        } else if (filter === "") {
          return (
            <Grid
              item
              key={val.id}
              xs={12}
              sm={gridCheck}
              md={gridCheck}
              sx={{
                padding: { xs: "1em 0 !important", sm: "0.5em !important" },
              }}
            >
              <ContactCard data={val} handleRemove={handleRemove} />
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
  );
};

export default Index;
