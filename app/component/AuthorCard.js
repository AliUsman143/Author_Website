import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const AuthorCard = ({imgSrc,death,birth,name,description,style = {} }) => {
  return (
    <Card
      sx={{
        maxWidth: 305,
        border: "1px solid #6b4226",
        paddingTop: "10px",
        // paddingBottom: "5px",
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
          sx={{ width: 100, height: 100,...style.avatar, }}
        />
      </Box>

      {/* Author Information */}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          sx={{ fontWeight: "bold", mb: 0, ...style.name,}}
        >
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          {birth} - {death}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
          textAlign="center"
          sx={{ ...style.description,}}
        >
          {description}
        </Typography>

      
      </CardContent>
    </Card>
  );
};

export default AuthorCard;

