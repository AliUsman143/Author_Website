"use client";
import { ButtonBase, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import AuthorCard from "../component/AuthorCard";
import { fetchAuthorCardData } from "../store/api/Authorcardapi";
import AuthorCardMin from "../component/AuthorcardMin";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";

const PopularAuthorsBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "30px",
  backgroundColor: "#363f33",
  padding: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const page = () => {
  const [data, setData] = useState([]);
  const [currentAuthors, setCurrentAuthors] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchedData = fetchAuthorCardData();
    setData(fetchedData);
    setCurrentAuthors(fetchedData.slice(0, 8)); // Initial 8 authors
  }, []);

  const generateNewAuthors = () => {
    // Calculate the new start index
    const newIndex = (startIndex + 8) % data.length;
    setStartIndex(newIndex);
    setCurrentAuthors(data.slice(newIndex, newIndex + 8)); // Get next 8 authors
  };

  return (
    <>
      <Box sx={{ bgcolor: "#f5f5f5" }}>
        <Box sx={{ bgcolor: "#566342", width: "100%" }}>
          <PopularAuthorsBox>
            <Typography
              sx={{
                fontFamily: "belleza",
                fontWeight: 350,
                fontSize: "15px",
                color: "white",
                lineHeight: "19px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Topics: Love · Serve · Charity · Motivation · Guru · Yoga · Practise · Meditation
            </Typography>
          </PopularAuthorsBox>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "8vh",
            mt: "15px",
            bgcolor: "#e2dfdc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: "belleza",
              fontWeight: 350,
              fontSize: "23px",
              color: "black",
              lineHeight: "19px",
            }}
          >
            Discover new authors and click if you want to read their quotes.
          </Typography>
          <Button
            className="absolute right-5"
            sx={{
              width: "250px",
              height: "25px",
              fontFamily: "belleza",
              fontWeight: 350,
              fontSize: "14px",
              color: "#2D1B0B",
              lineHeight: "19px",
              borderColor: "#ffcccc",
              bgcolor: "white",
              border: "1px solid",
              borderRadius: "0.75rem",
              textTransform: "none",
              letterSpacing: "0.1rem",
            }}
            variant="contained"
            onClick={generateNewAuthors} // Add onClick handler
          >
            Generate new authors
          </Button>
        </Box>

        {/* Author Cards Grid */}
        <Grid container spacing={2}>
          {currentAuthors.map((author, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                maxWidth: "100%",
                minHeight: "screen",
                mb: "25px",
              }}
            >
              <AuthorCard
                imgSrc={author.image}
                name={author.name}
                birth={author.birth}
                death={author.death}
                description={
                  author.description.length > 100
                    ? author.description.substring(0, author.description.indexOf(" ", 360)) + "..."
                    : author.description
                }
                titleStyle="text-2xl font-bold tracking-tight text-white"
                descriptionStyle="text-sm text-gray-100"
                imgdiv="w-full h-64 object-center overflow-hidden"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default page;
