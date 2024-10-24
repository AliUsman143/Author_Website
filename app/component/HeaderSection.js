"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import Link from "next/link";
import { useMediaQuery } from "@mui/material"; // Import useMediaQuery
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton"; // Import IconButton

// Search container styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "9999px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  marginTop: "8px",
  height: "40px",
}));

// Search Icon styling
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Styled Input Base styling
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black", // Change to black
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "20ch",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const PopularAuthorsBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "30px",
  bgcolor: "#566342",

  padding: "5px", // Padding set to 5px
  display: "flex", // Use flex to align children
  justifyContent: "space-between", // Ensures content is spaced out evenly
  alignItems: "center", // Vertically centers the items
  [theme.breakpoints.down("lg")]: {
    display: "none", // Hide on medium screens and above
  },
}));
// Create a styled TextField with breakpoints
const ResponsiveTextField = styled(TextField)(({ theme }) => ({
  borderRadius: "0.75rem", // Rounded corners
  // mt:2,
  paddingTop:"6px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "0.75rem", // Ensures the input itself is rounded
    "& fieldset": {
      borderColor: "black", // Sets the border color to black
    },
    "&:hover fieldset": {
      borderColor: "black", // Keeps black border on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "black", // Keeps black border when focused
    },
  },
  // Responsive widths for different breakpoints
  width: "100%", // Full width on small screens
  [theme.breakpoints.up("lg")]: {
    width: "150px", // Width for large screens
  },
  [theme.breakpoints.down("lg")]: {
    width: "100px", // Width for medium screens
  },
  [theme.breakpoints.down("md")]: {
    width: "60px", // Width for small screens
  },
}));

const pages = [
  { name: "Home", path: "/" },
  { name: "Authors", path: "/author" },
  { name: "Topics", path: "/topic" },
  { name: "Discover Author", path: "/discover" },
];

const languages = ["English", "Spanish", "French", "German", "Italian"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const isMediumOrSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  ); // Check if screen is medium or small

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        {" "}
        {/* Set AppBar background to white */}
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 0,
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  fontSize: { xs: "25px", md: "35px" },
                  color: "black", // Text color black
                  textDecoration: "none",
                  lineHeight: 1,
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Fontaneli.com
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 400,
                  fontSize: { xs: "12px", md: "15px" },
                  color: "black", // Text color black
                  textDecoration: "none",
                  lineHeight: 1,
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                  wordBreak: "break-word",
                }}
              >
                World's biggest Spiritual quote website
              </Typography>
            </Box>

            {/* Responsive Menu for Medium and Small Screens */}
            {isMediumOrSmallScreen ? (
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link href={page.path}>
                        <Typography sx={{ textAlign: "center" }}>
                          {page.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <Box
                    key={page.name}
                    sx={{ position: "relative", marginRight: 2 }}
                  >
                    <Link href={page.path} passHref>
                      <Button sx={{ my: 2, color: "black", display: "block" }}>
                        {" "}
                        {/* Text color black */}
                        {page.name}
                      </Button>
                    </Link>
                    {page.name === "Discover Author" && (
                      <Button
                        variant="contained"
                        sx={{
                          position: "absolute",
                          bottom: "7px",
                          left: "100%",
                          transform: "translateX(-50%)",
                          backgroundColor: "green",
                          color: "white",
                          fontSize: "10px",
                          padding: "2px 6px",
                          minWidth: "auto",
                          "&:hover": {
                            backgroundColor: "darkgreen",
                          },
                        }}
                      >
                        New
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>
            )}

            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              {isMediumOrSmallScreen ? ( // Conditional rendering for smaller screens
                <IconButton>
                  <SearchIcon sx={{ color: "black" }} />{" "}
                  {/* Show search icon only */}
                </IconButton>
              ) : (
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search by Author"
                    inputProps={{ "aria-label": "search" }}
                    sx={{
                      border: "1px solid black", // Change search box border to black
                      borderRadius: "9999px", // Maintain border radius
                    }}
                  />
                </Search>
              )}

              <Autocomplete
                value={selectedLanguage} // Controlled component value
                onChange={(event, newValue) => setSelectedLanguage(newValue)} // Handles language change
                options={languages} // Available language options
                renderInput={(params) => (
                  <ResponsiveTextField
                    {...params}
                    label="Language" // Input label for better UX
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Tabs and red background for medium and small screens */}
      {isMediumOrSmallScreen && (
        <Box
          sx={{
            bgcolor: "gray",
            p: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {pages.map((page) => (
            <Link key={page.name} href={page.path} passHref>
              <Button sx={{ color: "white" }}>{page.name}</Button>
            </Link>
          ))}
        </Box>
      )}

      <Box sx={{ bgcolor: "#566342", width: "100%" }}>
        <PopularAuthorsBox>
          <Typography
            sx={{
              fontFamily: "belleza",
              fontWeight: 350,
              fontSize: "13px",
              color: "white",
              lineHeight: "19px",
            }}
          >
            Popular Authors: Jesus Christ · Ramana Maharshi · Ramakrishna · Neem
            Karoli Baba · Mahatma Gandhi · Paramahansa Yogananda · Osho · Alan
            Watts · Swami Vivekananda · Adi Shankara
          </Typography>
          <Button
            sx={{
              width: "250px",
              height: "25px", // Adjusting height for better padding
              fontFamily: "belleza",
              fontWeight: 350,
              fontSize: "14px",
              color: "#2D1B0B",
              lineHeight: "19px",
              borderColor: "#ffcccc", // Light red border
              bgcolor: "#e7cc76", // Red background
              border: "1px solid", // Defines the border thickness
              borderRadius: "0.50rem", // Rounded corners equivalent to 'rounded-xl'
              textTransform: "none", // Keeps the text in its original casing (no uppercase)
              letterSpacing: "0.1rem", // Adds some space between letters
              "&:hover": {
                bgcolor: "#ff6666", // Slightly lighter red on hover
                borderColor: "#ff9999", // Lighter red border on hover
              },
            }}
            variant="contained"
          >
            Save our website for later :)
          </Button>
        </PopularAuthorsBox>
      </Box>
    </>
  );
}

export default ResponsiveAppBar;
