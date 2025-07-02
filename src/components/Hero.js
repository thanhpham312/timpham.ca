"use client";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Box, Container, Typography, IconButton } from "@mui/material";
import styles from "./Hero.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isUltraWide, setIsUltraWide] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkAspectRatio = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      setIsUltraWide(aspectRatio > 2);
    };

    checkAspectRatio();
    window.addEventListener("resize", checkAspectRatio);

    return () => window.removeEventListener("resize", checkAspectRatio);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Box
      className={styles.heroContainer}
      sx={{
        position: "relative",
        width: "100%",
        height: isUltraWide ? "100vh" : 0,
        paddingTop: isUltraWide ? 0 : "50%",
        overflow: "hidden",
      }}
    >
      <video
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/eras.mp4" type="video/mp4" />
      </video>

      <Box
        className={styles.overlay}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></Box>

      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          component={"div"}
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "3rem", lg: "4rem" },
            letterSpacing: "2px",
            color: "white",
            textAlign: "left",
            padding: "4rem 0 0 0.5rem",
          }}
        >
          <Typewriter
            options={{
              strings: [
                "Hi there! My name is Thanh.",
                "You can also call me Tim.",
                "Nice to meet you!",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              pauseFor: 2000,
            }}
          />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 3,
            padding: "1.5rem 0",
          }}
        >
          {/* LinkedIn Button */}
          <IconButton
            href="https://ca.linkedin.com/in/thanhpham312"
            target="_blank"
            sx={{
              color: "white",
              "&:hover": {
                color: "#0077b5",
              },
              transition: "0.3s",
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>

          {/* GitHub Button */}
          <IconButton
            href="https://github.com/thanhpham312"
            target="_blank"
            sx={{
              color: "white",
              "&:hover": {
                color: "#333",
              },
              transition: "0.3s",
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>

          {/* Instagram Button */}
          <IconButton
            href="https://www.instagram.com/thanhsphotos"
            target="_blank"
            sx={{
              color: "white",
              "&:hover": {
                color: "#e4405f",
              },
              transition: "0.3s",
            }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
