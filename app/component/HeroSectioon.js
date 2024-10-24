"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthorCard from "./AuthorCard";
import { fetchAuthorCardData } from "../store/api/Authorcardapi";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Grid, Paper } from "@mui/material";
import Link from "next/link";
import AuthorCardMin from "./AuthorcardMin";
const HeroSectioon = () => {

  // quoes section strt
  const arrydata = fetchAuthorCardData(); // Assuming this returns the author data
  const [boxes, setBoxes] = useState([]);

  // Function to select quotes for 10 different authors
  const getRandomQuotes = () => {
    const randomQuotes = [];
    const authorsCount = arrydata.length;

    // Randomly select 10 unique authors
    const selectedAuthors = new Set();
    while (selectedAuthors.size < Math.min(10, authorsCount)) {
      const randomIndex = Math.floor(Math.random() * authorsCount);
      selectedAuthors.add(arrydata[randomIndex]);
    }

    selectedAuthors.forEach((author) => {
      const quotes = Object.values(author.quotes);
      const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
      randomQuotes.push({
        name: author.name,
        quote: quotes[randomQuoteIndex],
      });
    });

    return randomQuotes;
  };

  useEffect(() => {
    // Set initial boxes
    setBoxes(getRandomQuotes());

    // Update quotes every 10 seconds
    const interval = setInterval(() => {
      setBoxes(getRandomQuotes());
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);


  // quoes section end
  
// Authorcard api strt 
 
  const [data, setData] = useState([]);
  const [currentAuthors, setCurrentAuthors] = useState([]); // Authors currently displayed
  const [startIndex, setStartIndex] = useState(0); // Index to track authors
  useEffect(() => {
    // Fetch data from the API file
    const fetchedData = fetchAuthorCardData();
    setData(fetchedData);
    setCurrentAuthors(fetchedData.slice(0, 4)); // Initial 4 authors
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the new start index
      const newIndex = (startIndex + 4) % data.length;
      setStartIndex(newIndex);
      setCurrentAuthors(data.slice(newIndex, newIndex + 4)); // Get next 4 authors
    }, 3000); // Every 30 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [startIndex, data]);
  // Authorcard api end
  return (
    <>
      <Box sx={{ bgcolor: "#f5f5f5" }}>
        <Box
          sx={{
            width: "100%",
            height: "8vh",
            mt: "15px",
            bgcolor: "#e2dfdc",
            display: "flex", // Use flexbox for centering
            alignItems: "center", // Vertically center
            justifyContent: "center", // Horizontally center
            textAlign: "center", // Ensure text is centered
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
            Today we suggest reading quotes from these authors:
          </Typography>
        </Box>
        {/* --------------------------------------------------- */}
        {/* Author Cards Grid */}
        <Grid container spacing={2}>
          {currentAuthors.map((author, index) => (
            <Grid
              item
              xs={12} // 1 card on extra-small screens
              sm={6} // 2 cards on small screens
              md={3} // 4 cards on medium and larger screens
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center", // Center the card in the Grid item
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
                    ? author.description.substring(
                        0,
                        author.description.indexOf(" ", 360)
                      ) + "..."
                    : author.description
                }
                titleStyle="text-2xl font-bold tracking-tight text-white"
                descriptionStyle="text-sm text-gray-100"
                imgdiv="w-full h-64 object-center overflow-hidden"
              />
            </Grid>
          ))}
        </Grid>

        <hr
          style={{ height: "5px", backgroundColor: "#566342", border: "none" }}
        />

        {/* Quotions div  */}

        <Grid
          container
          spacing={1}
          style={{
            height: "100vh",
            overflow: "hidden",
            paddingTop: "30px",
            backgroundColor: "",
          }}
        >
          <Grid
            item
            xs={2}
            style={{ height: "100%", bgcolor: "#f5f5f5" }}
          ></Grid>
          <Grid item xs={7} style={{ height: "100%" }}>
            <Box
              style={{
                backgroundColor: "#f5f5f5",
                height: "100%",
                padding: "16px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "8vh",
                  border: "1px solid #6b4226",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "white",
                  display: "flex", // Use flexbox for centering
                  alignItems: "center", // Vertically center
                  justifyContent: "center", // Horizontally center
                  textAlign: "center", // Ensure text is centered
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
                  Our 30 quotes of the day:
                </Typography>
              </Box>

              {/* ---30 quotes-----  */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  mt: 2,
                  marginBottom: "100px",
                }}
              >
                {boxes.map((box, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: "10hv", // Adjust height for layout
                      border: "1px solid #6b4226",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "white",
                      // justifyContent: "center",
                      padding: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "belleza",
                          fontWeight: 200,
                          fontSize: "15px",
                          color: "black",
                          lineHeight: "19px",
                          flexGrow: 1, // Make the quote take up available space
                          display: "flex",
                        }}
                      >
                        "{box.quote}"
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
                          <Typography
                            sx={{
                              fontFamily: "belleza",
                              fontWeight: 200,
                              fontSize: "15px",
                              paddingLeft: "6px",
                              color: "black",
                            }}
                          >
                            {Math.floor(Math.random() * 200)}{" "}
                            {/* Random likes */}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "belleza",
                            fontWeight: 200,
                            fontSize: "15px",
                            color: "black",
                          }}
                        >
                          {box.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} style={{ height: "100%", marginTop: "15px" }}>
            <Paper
              style={{
                backgroundColor: "white",
                height: "60vh",
                padding: "16px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "belleza",
                  fontWeight: 350,
                  fontSize: "23px",
                  color: "black",
                  lineHeight: "19px",

                  paddingBottom: "15px",
                }}
              >
                Few of our Authors:
              </Typography>
            

              <Link href="/author">
                  {/* Author Cards Grid */}
              <Grid container direction="column">
                {currentAuthors.map((authormin, index) => (
                  <Grid
                    item
                    xs={12} // 2 cards on extra-small screens
                    key={index}
                    sx={{
                      display: "flex",
                       // Center the card in the Grid item
                    
                      mb: "10px",
                    }}
                  >
                    <AuthorCardMin
                    imgSrc={authormin.image}
                    name={
                      authormin.name.length > 50
                        ? authormin.name.substring(
                            0,
                            authormin.name.indexOf(" ", 0)
                          ) + "..."
                        : authormin.name
                    }
                    description={
                      authormin.description.length > 100
                        ? authormin.description.substring(
                            0,
                            authormin.description.indexOf(" ", 17)
                          ) + "..."
                        : authormin.description
                    }
                    style={{
                      avatar: {
                        width: 50,
                        height: 50,
                      },
                      name:{
                        lineHeight:"2px",
                        fontSize:"17px",
                      }
                    }}
                  />
                  </Grid>
                ))}
              </Grid>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSectioon;
