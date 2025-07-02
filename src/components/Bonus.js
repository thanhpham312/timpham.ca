"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Container,
} from "@mui/material";

// Components
import AlbumCard from "./AlbumCard";

const albums = [
  {
    image: "/images/bonus/blue.jpg",
    title: "Blue (Becky's Version)",
    artist: "Becky Quick",
  },
  {
    image: "/images/bonus/myths.jpg",
    title: "myths",
    artist: "Becky Quick",
  },
  {
    image: "/images/bonus/habour-of-doubt.jpg",
    title: "Habour of Doubt",
    artist: "The Ankles",
  },
  {
    image: "/images/bonus/chestbugs.jpg",
    title: "Chestbugs",
    artist: "The Ankles",
  },
  {
    image: "/images/bonus/halfheartedly-emotional-to-a-medium-level.jpg",
    title: "Halfheartedly Emotional to a Medium Level",
    artist: "Louis Cabbage",
  },
  {
    image: "/images/bonus/crushed-by-urge-to-be-casually-delivered.jpg",
    title: "Crushed by Urge to be Casually Delivered",
    artist: "Louis Cabbage",
  },
  {
    image: "/images/bonus/transylvania.jpg",
    title: "Transylvania",
    artist: "Left Tab For Loonies",
  },
  {
    image: "/images/bonus/exalt-shadows.jpg",
    title: "Exalt Shadows",
    artist: "Left Tab For Loonies",
  },
];

const Bonus = () => {
  const carouselRef = useRef(null);
  const leftContainerRef = useRef(null);
  const [leftContainerHeight, setLeftContainerHeight] = useState(0);

  useEffect(() => {
    if (leftContainerRef.current) {
      setLeftContainerHeight(leftContainerRef.current.offsetHeight);
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        padding: "2rem 0",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginBottom: "1.5rem",
          }}
        >
          Bonus
        </Typography>
        <Typography variant="body1" color="text.secondary">
          I created some album covers to be displayed when showcasing PAPWALK. I
          spent way too much time on them, so have a look at these outakes!
        </Typography>
        <Container
          sx={{
            padding: "2rem 0",
            position: "relative",
          }}
        >
          <Grid container spacing={2} justifyContent={"center"}>
            {albums.map((album, index) => (
              <Grid item key={index} size={{ xs: 6, sm: 3 }}>
                <AlbumCard
                  image={album.image}
                  title={album.title}
                  artist={album.artist}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default Bonus;
