// // "use client";

// // import React, { useState, useEffect } from "react";
// // import {
// //   Card,
// //   CardContent,
// //   Typography,
// //   Grid,
// //   CircularProgress,
// //   Box,
// //   Avatar,
// // } from "@mui/material";
// // import { styled } from "@mui/material/styles";
// // import axios from "axios";

// // // Styled Card Component
// // const StyledCard = styled(Card)(({ theme }) => ({
// //   maxWidth: 305,
// //   borderRadius: "15px",
// //   border: "1px solid #ddd",
// //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// //   margin: theme.spacing(1),
// //   [theme.breakpoints.down("sm")]: {
// //     maxWidth: "100%",
// //   },
// // }));

// // const AuthorCard = () => {
// //   const [authors, setAuthors] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(false);

// //   // Fetch data from the API
// //   useEffect(() => {
// //     const fetchAuthors = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://mocki.io/v1/f7f3d011-392c-4277-b5bd-0fbaa68e965f"
// //         );
// //         setAuthors(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Error fetching authors:", err);
// //         setError(true);
// //         setLoading(false);
// //       }
// //     };

// //     fetchAuthors();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <Box
// //         sx={{
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           height: "50vh",
// //         }}
// //       >
// //         <CircularProgress />
// //       </Box>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <Typography
// //         variant="h6"
// //         color="error"
// //         sx={{ textAlign: "center", mt: 4 }}
// //       >
// //         Failed to load authors. Please try again later.
// //       </Typography>
// //     );
// //   }

// //   return (
// //     <>
// //       <Box sx={{ flexGrow: 1, padding: 4, bgcolor: "#f5f5f5" }}>
// //         <Grid container spacing={2} justifyContent="center">
// //           {authors.slice(0, 4).map((author, index) => (
// //             <Grid item key={index} xs={12} sm={6} md={3}>
// //               <StyledCard>
// //                 <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
// //                   <Avatar
// //                     src={author.imageUrl} // Assuming the API provides the image URL
// //                     sx={{ width: 100, height: 100 }}
// //                   />
// //                 </Box>
// //                 <CardContent>
// //                   <Typography
// //                     gutterBottom
// //                     variant="h5"
// //                     component="div"
// //                     sx={{
// //                       fontFamily: "belleza",
// //                       fontWeight: 600,
// //                       textAlign: "center",
// //                     }}
// //                   >
// //                     {author.name}
// //                   </Typography>
// //                   <Typography
// //                     variant="body2"
// //                     color="text.secondary"
// //                     sx={{
// //                       fontFamily: "belleza",
// //                       fontWeight: 400,
// //                       textAlign: "center",
// //                     }}
// //                   >
// //                     {author.birth} - {author.death}
// //                   </Typography>
// //                   <Typography
// //                     variant="body1"
// //                     color="text.primary"
// //                     sx={{
// //                       mt: 2,
// //                       fontFamily: "belleza",
// //                       fontWeight: 350,
// //                       textAlign: "center",
// //                     }}
// //                   >
// //                     {author.description}
// //                   </Typography>
// //                 </CardContent>
// //               </StyledCard>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Box>
// //       <hr className="border border-b-2 border-[#566342]"/>
// //       <p>
// //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nobis
// //         et, quia ea aut esse mollitia eius velit veritatis illo, expedita minus,
// //         itaque distinctio quidem. Minima in quas perferendis asperiores.
// //       </p>
// //     </>
// //   );
// // };

// // export default AuthorCard;

import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const AuthorCard2 = () => {
  return (
    <Card
      sx={{
        maxWidth: 305,
        borderRadius: '15px',
        border: '1px solid #ddd',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Avatar
          src="/img/ali.jpg" // Replace with your image path
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          sx={{ fontWeight: 'bold' }}
        >
          Paramahansa Yogananda
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          1856 - 1943
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mt={2}
          textAlign="center"
        >
          An Indian yogi and spiritual teacher, he is best known for bringing the ancient wisdom of yoga and meditation to the West...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AuthorCard2;
