"use client";
import { Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import AuthorCard from "../component/AuthorCard";
import { fetchAuthorCardData } from "../store/api/Authorcardapi";
import AuthorCardMin from "../component/AuthorcardMin";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";

// quotes section start
// Function to fetch author data
const arrydata = fetchAuthorCardData(); // Assuming this returns the author data

// Function to select quotes for 7 different authors
const getRandomQuotes = (page, quotesPerPage = 7) => {
  const randomQuotes = [];
  const authorsCount = arrydata.length;

  // Randomly select 7 unique authors for each page
  const selectedAuthors = new Set();
  while (selectedAuthors.size < Math.min(quotesPerPage, authorsCount)) {
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
// quotes section end

const Page = () => {
  const [currentAuthor, setCurrentAuthor] = useState(null);
  const [data, setData] = useState([]);
  const [currentAuthors, setCurrentAuthors] = useState([]); // Authors currently displayed
  const [startIndex, setStartIndex] = useState(0); // Index to track authors
  const [boxes, setBoxes] = useState([]);
  const [page, setPage] = useState(1);
  const quotesPerPage = 7;

  // Fetch data once on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchAuthorCardData(); // Await the data fetching
        setData(fetchedData);
        if (fetchedData.length > 0) {
          setCurrentAuthor(fetchedData[0]); // Set initial author
          setCurrentAuthors(fetchedData.slice(0, 4)); // Set the list of authors
        }
      } catch (error) {
        console.error("Error fetching author card data:", error);
      }
    };
    fetchData();
  }, []);

  // Change author every 30 seconds
  useEffect(() => {
    if (data.length === 0) return; // Exit early if no data

    const interval = setInterval(() => {
      // Calculate the new start index
      const newIndex = (startIndex + 1) % data.length;
      setStartIndex(newIndex);
      setCurrentAuthor(data[newIndex]); // Update the current author
    }, 3000); // Every 30 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [startIndex, data]);

  // Quotes section
  useEffect(() => {
    // Set initial boxes based on the current page
    setBoxes(getRandomQuotes(page, quotesPerPage));
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value); // Update the page number on pagination change
  };

  // Authorcard API interval to update authors list every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (data.length === 0) return; // Exit if no data

      // Calculate the new start index
      const newIndex = (startIndex + 4) % data.length;
      setStartIndex(newIndex);
      setCurrentAuthors(data.slice(newIndex, newIndex + 4)); // Get next 4 authors
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [startIndex, data]);
  return (
    <>
      <Box sx={{ bgcolor: "#f5f5f5" }}>
        <Grid
          container
          style={{
            height: "85vh",
            overflow: "hidden",
            gap: 4,
            marginTop: "5px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Grid item xs={2.6} style={{ height: "100%" }}>
            <Paper
              style={{
                backgroundColor: "white",
                height: "100%",
                paddingLeft: "3px",
                paddingBottom: "0px",
                paddingTop: "0px",
                backgroundColor: "#f5f5f5",
              }}
            >
              {currentAuthor && (
                <AuthorCard
                  key={currentAuthor.name}
                  imgSrc={currentAuthor.image}
                  name={currentAuthor.name}
                  birth={currentAuthor.birth}
                  death={currentAuthor.death}
                  description={
                    currentAuthor.description.length > 100
                      ? currentAuthor.description.substring(
                          0,
                          currentAuthor.description.indexOf(" ", 300)
                        ) + "..."
                      : currentAuthor.description
                  }
                  style={{
                    card: { height: "55vh" },
                    avatar: {
                      width: 80,
                      height: 80,
                    },
                    name: { lineHeight: "5px", mb: 1 },
                  }}
                  titleStyle="text-2xl font-bold tracking-tight text-white"
                  descriptionStyle="text-sm text-gray-100"
                  imgdiv="w-full h-64 object-center overflow-hidden"
                />
              )}
            </Paper>
          </Grid>
          <Grid item xs={6.6} style={{ height: "100vh" }}>
            <Box
              style={{
                backgroundColor: "#f5f5f5",
                height: "100vh",
              }}
            >
              {/* ---7 quotes displayed at a time---  */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                {boxes.map((box, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: "auto",
                      border: "1px solid #6b4226",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "white",
                      padding: "7px",
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
                          fontSize: "13px",
                          color: "black",
                          lineHeight: "19px",
                          flexGrow: 1,
                          display: "flex",
                        }}
                      >
                        {`"${
                          box.quote.length > 100
                            ? box.quote.substring(0, 70) + "..."
                            : box.quote
                        }"`}
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
                              fontSize: "13px",
                              paddingLeft: "6px",
                              color: "black",
                            }}
                          >
                            {Math.floor(Math.random() * 200)}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "belleza",
                            fontWeight: 200,
                            fontSize: "13px",
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Pagination
                  count={5}
                  page={page}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                  sx={{ marginTop: "20px" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2.6} style={{ height: "100%" }}>
            <Box
              style={{
                backgroundColor: "white",
                height: "50vh",
                padding: "16px",
                backgroundColor: "#f5f5f5",
                border: "1px solid #6b4226",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "belleza",
                  fontWeight: 350,
                  fontSize: "20px",
                  color: "black",
                  lineHeight: "19px",
                  paddingBottom: "15px",
                }}
              >
                Suggest Authors:
              </Typography>

              <Grid container direction="column">
                {currentAuthors.map((authormin, index) => (
                  <Grid
                    item
                    xs={12}
                    key={index}
                    sx={{
                      display: "flex",
                      mb: "4px",
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
                          width: 40,
                          height: 40,
                        },
                        name: {
                          lineHeight: "1px",

                          fontSize: "17px",
                        },
                        card: {
                          height: "9vh",
                          width: "265px",
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <hr
          style={{ height: "5px", backgroundColor: "#566342", border: "none" }}
        />
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
      </Box>
    </>
  );
};

export default Page;
