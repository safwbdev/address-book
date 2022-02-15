import React from "react";
import FileBase64 from "react-file-base64";
import {
  Avatar,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  PLACEHOLDER_CATEGORY,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_NAME,
  PLACEHOLDER_PHONE,
} from "../../constants/lang";
import { categoryList } from "../../constants/categories";

const Form = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid container direction="row" alignItems="center" my={3}>
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          sx={{
            marginBottom: { xs: "1em", sm: 0 },
          }}
        >
          <Avatar src={props.image} sx={{ width: "80px", height: "80px" }} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          style={{ display: "flex", justifyContent: "start" }}
        >
          <FileBase64 onDone={props.handleImage.bind(this)} multiple={false} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label={PLACEHOLDER_NAME}
          onChange={props.handleName}
          value={props.name}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label={PLACEHOLDER_PHONE}
          onChange={props.handleTel}
          value={props.tel}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label={PLACEHOLDER_EMAIL}
          onChange={props.handleEmail}
          value={props.email}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {PLACEHOLDER_CATEGORY}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.category}
            label={PLACEHOLDER_CATEGORY}
            onChange={props.handleCategory}
          >
            {categoryList.map(({ value, label }) => {
              return <MenuItem value={value}>{label}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Form;
