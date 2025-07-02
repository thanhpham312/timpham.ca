"use client";
import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1c1c1c",
        color: "white",
        padding: "2rem 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 3,
            paddingBottom: "1.5rem",
          }}
        >
          {/* LinkedIn */}
          <IconButton
            href="https://linkedin.com/in/thanhpham312"
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

          {/* GitHub */}
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

          {/* Instagram */}
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

        {/* Optional text */}
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} timpham.ca — All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
