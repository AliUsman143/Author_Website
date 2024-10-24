import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const AuthorCardMin = ({ imgSrc, name, description, style = {} }) => {
  return (
    <Card
      sx={{
        width: "300px",
        height: "11vh",
        border: "1px solid #6b4226",
        paddingTop: "5px",
        display: "flex",
        cursor: "pointer",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        ...style.card,
      }}
    >
      {/* Avatar Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 0,
        }}
      >
        <Avatar
          src={imgSrc} // Dynamic image
          alt={name}
          sx={{
            width: 60,
            height: 60,
           marginTop:"3px",
            marginLeft: "9px",
            ...style.avatar,
          }}
        />
      </Box>

      {/* Author Information */}
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            fontFamily: "belleza",
            ...style.name,
          }}
        >
          {name}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
        
          sx={{
            ...style.description,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AuthorCardMin;
