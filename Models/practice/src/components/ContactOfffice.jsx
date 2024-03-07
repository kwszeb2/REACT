import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ContactOffice({ contactList }) {
  return (
    <div>
      {contactList.map((item, index) => (
        <List
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
        >
          <ListItem key={index} className="mainCard" alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={`https://source.unsplash.com/random?${Math.floor(
                  Math.random() * 200
                )}`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.phone}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.addressline1 + " " + item.addressline2}
                    <br /> {item.city + " " + item.state + " " + item.zipcode}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </div>
  );
}
