import React, { useState } from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/action/listActions";
import { v4 as uuidv4 } from "uuid";
import {
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
  Dialog,
} from "@mui/material";
import {
  BTN_CANCEL,
  BTN_SUBMIT,
  TITLE_NEW_CONTACT,
} from "../../constants/lang";

const Index = (props) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTel = (e) => setTel(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleImage = (a) => setImage(a.base64);
  const handleCategory = (e) => setCategory(e.target.value);

  const clearALL = () => {
    setName("");
    setTel("");
    setEmail("");
    setCategory("");
    setImage("");
  };
  const handleClose = () => {
    props.setOpenDialog(false);
    clearALL();
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addContact({
        id: uuidv4(),
        name: name,
        tel: tel,
        email: email,
        image: image,
        category: category,
        favorite: false,
      })
    );
    clearALL();
    props.setOpenDialog(false);
  };

  let checkAll = name && tel && email && category;

  return (
    <div>
      <Dialog onClose={handleClose} open={props.openDialog}>
        <DialogTitle>{TITLE_NEW_CONTACT}</DialogTitle>
        <DialogContent>
          <Form
            onClose={handleClose}
            handleName={handleName}
            handleTel={handleTel}
            handleEmail={handleEmail}
            handleCategory={handleCategory}
            handleImage={handleImage}
            image={image}
            category={category}
          />
        </DialogContent>
        <DialogActions>
          {checkAll ? (
            <Button variant="contained" onClick={() => handleSubmit()}>
              {BTN_SUBMIT}
            </Button>
          ) : (
            <Button disabled>{BTN_SUBMIT}</Button>
          )}
          <Button onClick={handleClose}>{BTN_CANCEL}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Index;
