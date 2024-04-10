import React from "react";
import { Grid, Box } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function ContactOffice({ contactList }) {
  return (
    <div>
      <Box m={3}>
        <Grid container spacing={2}>
          {contactList.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                border={1}
                borderColor="grey.300"
                borderRadius={2}
                padding={2}
                display="flex"
                alignItems="flex-start"
              >
                <Box width={150} height={150} mr={2}>
                  <img
                    src={item.img}
                    alt=""
                    srcset=""
                    width={150}
                    height={150}
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Box flexGrow={1}>
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
                          <br />{" "}
                          {item.city + " " + item.state + " " + item.zipcode}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}