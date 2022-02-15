import React from "react";
import EditForm from "../EditForm";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Link,
} from "@mui/material";
import {
  FaTrash,
  FaRegHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { blue } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/action/contactActions";

const ContactCard = (props) => {
  const { id, name, tel, email, image, category, favorite } = props.data;
  const dispatch = useDispatch();
  const toggleFavorite = (id) => {
    dispatch(
      updateContact(id, {
        id: id,
        name: name,
        tel: tel,
        email: email,
        image: image,
        category: category,
        favorite: !favorite,
      })
    );
  };
  const FavoriteButton = ({ favorite }) =>
    favorite ? <FaHeart /> : <FaRegHeart />;

  const ActionButtons = ({ id }) => (
    <>
      <EditForm data={props.data} />
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => props.handleRemove(id)}
      >
        <FaTrash />
      </IconButton>
    </>
  );

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src={image}
            sx={{ bgcolor: blue[500], textTransform: "capitalize" }}
          >
            {name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton
            color="primary"
            aria-label="Add to favorites"
            onClick={() => toggleFavorite(id)}
          >
            <FavoriteButton favorite={favorite} />
          </IconButton>
        }
        title={name}
        subheader={category}
      />
      <CardContent style={{ padding: "0 16px" }}>
        <List style={{ padding: "0" }}>
          <ListItem
            sx={{
              flexDirection: { xs: "row-reverse", sm: "row" },
              padding: { xs: "0 0 0 3.5em", sm: "0 10px" },
            }}
          >
            {" "}
            <a href={`mailto:${email}`}>
              <ListItemIcon
                className="list-icon"
                sx={{ minWidth: { xs: 0, sm: "40px" } }}
              >
                <FaEnvelope />
              </ListItemIcon>
            </a>
            <ListItemText>
              <Link underline="none" href={`mailtto:${email}`}>
                {email}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              flexDirection: { xs: "row-reverse", sm: "row" },
              padding: { xs: "0 0 1em 3.5em", sm: "0 10px" },
            }}
          >
            <Link href={`tel:${tel}`}>
              <ListItemIcon
                className="list-icon"
                sx={{ minWidth: { xs: 0, sm: "40px" } }}
              >
                <FaPhoneAlt color="primary" />
              </ListItemIcon>
            </Link>
            <ListItemText>
              <Link underline="none" href={`tel:${tel}`}>
                {tel}
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ justifyContent: "end" }}
        sx={{
          borderTop: { xs: "1px solid #e3e3e3", sm: "none" },
        }}
      >
        <ActionButtons id={id} />
      </CardActions>
    </Card>
  );
};

export default ContactCard;
