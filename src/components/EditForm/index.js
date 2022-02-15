import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/action/listActions";
import { FaEdit } from "react-icons/fa";
import Form from "./Form";
import {
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
  Dialog,
  IconButton,
} from "@mui/material";
import {
  BTN_CANCEL,
  BTN_UPDATE,
  TITLE_UPDATE_CONTACT,
} from "../../constants/lang";

const EditForm = ({ data }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => setOpenDialog(true);

  const [name, setName] = useState(data.name);
  const [tel, setTel] = useState(data.tel);
  const [email, setEmail] = useState(data.email);
  const [image, setImage] = useState(data.image);
  const [category, setCategory] = useState(data.category);

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
  const reset = () => {
    setName(data.name);
    setTel(data.tel);
    setImage(data.email);
    setCategory(data.category);
    setImage(data.image);
  };

  const handleClose = () => {
    setOpenDialog(false);
    reset();
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      updateContact(data.id, {
        id: data.id,
        name: name,
        tel: tel,
        email: email,
        image: image,
        category: category,
        favorite: false,
      })
    );
    clearALL();
    handleClose();
  };

  let checkAll = name && tel && email && category;
  return (
    <div>
      <IconButton aria-label="edit" size="small" onClick={handleClickOpen}>
        <FaEdit />
      </IconButton>
      <Dialog onClose={handleClose} open={openDialog}>
        <DialogTitle>{TITLE_UPDATE_CONTACT}</DialogTitle>
        <DialogContent>
          <Form
            onClose={handleClose}
            formData={data}
            handleName={handleName}
            handleTel={handleTel}
            handleEmail={handleEmail}
            handleImage={handleImage}
            handleCategory={handleCategory}
            name={name}
            tel={tel}
            email={email}
            image={image}
            category={category}
          />
        </DialogContent>
        <DialogActions>
          {checkAll ? (
            <Button variant="contained" onClick={() => handleSubmit()}>
              {BTN_UPDATE}
            </Button>
          ) : (
            <Button disabled>{BTN_UPDATE}</Button>
          )}
          <Button onClick={handleClose}>{BTN_CANCEL}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditForm;
