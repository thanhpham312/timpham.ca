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

const About = () => {
  const leftCardRef = useRef(null);
  const [leftCardHeight, setLeftCardHeight] = useState(0);

  useEffect(() => {
    if (leftCardRef.current) {
      setLeftCardHeight(leftCardRef.current.offsetHeight);
    }
  }, []);

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        width: "100%",
        padding: " 4rem 0 1rem 0",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid size={{ xs: 12, sm: 4 }}>
            <Card
              ref={leftCardRef}
              sx={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                alt="Profile Picture"
                height="100%"
                image="/images/profile.jpg"
                sx={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </Card>
          </Grid>

          <Grid item size={{ xs: 12, sm: 8 }}>
            <Card
              sx={{
                borderRadius: "15px",
                padding: "1rem",
                boxShadow: 3,
                height: "100%",
                height: leftCardHeight,
                overflowY: "auto",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    marginBottom: "1.5rem",
                  }}
                >
                  About ME!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  I am a software developer based in Vancouver, British
                  Columbia.
                  <br />
                  <br />
                  Having lived here for nearly 10 years working in various roles
                  ranging from software development to cloud infrastructure
                  deployment, sometimes I feel like I have pidgeonholed myself
                  into a life in tech. And while I do love tech, often times I
                  find myself picking up other things here and there whenever
                  they pique my interest.
                  <br />
                  <br />
                  Over the years, I've dabbled in photography, video editting,
                  and machine learning,... Some might be useful professionally,
                  some might remain a hobby that I pick up again now and then.
                  Who can say!
                  <br />
                  <br />
                  Bonus: Here's a recreation of me at The Eras Tour!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
