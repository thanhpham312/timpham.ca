"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  IconButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const NavigationBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [boxShadow, setBoxShadow] = useState("none");
  const isMobile = useMediaQuery("(max-width:600px)");

  // Change navbar background color on scroll
  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
        setBoxShadow("0 3px 10px rgba(0, 0, 0, 0.1)");
      } else {
        setBgColor("transparent");
        setBoxShadow("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle page navigation
  const handleNavigation = (route) => {
    router.push(route);
    setOpenDrawer(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: bgColor,
        boxShadow: boxShadow,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Toolbar>
        <Container
          maxWidth="lg"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 0.5rem",
          }}
        >
          <Typography
            variant="h6"
            onClick={() => handleNavigation("/")}
            style={{
              cursor: "pointer",
              color: bgColor === "transparent" ? "white" : "black",
              transition: "color 0.3s ease",
            }}
          >
            timpham.ca
          </Typography>

          {isMobile ? (
            <>
              {/* Mobile menu icon */}
              <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
              </IconButton>

              {/* Drawer for mobile */}
              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <List
                  sx={{
                    width: "45vw",
                  }}
                >
                  <ListItem
                    button
                    onClick={() => handleNavigation("/")}
                    sx={{
                      padding: "1rem 1.5rem",
                      fontWeight: "700",
                    }}
                  >
                    HOME
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => handleNavigation("#about")}
                    sx={{
                      padding: "1rem 1.5rem",
                      fontWeight: "700",
                    }}
                  >
                    ABOUT
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => handleNavigation("#papwalk")}
                    sx={{
                      padding: "1rem 1.5rem",
                      fontWeight: "700",
                    }}
                  >
                    PAPWALK
                  </ListItem>

                  <Divider />
                  <ListItem sx={{ padding: '1.5rem 1.5rem ' }}>
                    <Typography variant="body2" sx={{ opacity: 0.6 }}>
                      © {new Date().getFullYear()} timpham.ca
                      <br />
                      All rights reserved.
                    </Typography>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            // Desktop Buttons
            <div
              sx={{
                paddingLeft: "1.5rem",
              }}
            >
              <Button
                color={bgColor === "transparent" ? "white" : "primary"}
                onClick={() => handleNavigation("/")}
                sx={{
                  marginLeft: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Home
              </Button>
              <Button
                color={bgColor === "transparent" ? "white" : "primary"}
                onClick={() => handleNavigation("#about")}
                sx={{
                  marginLeft: "1.5rem",
                  fontWeight: "700",
                }}
              >
                About
              </Button>
              <Button
                color={bgColor === "transparent" ? "white" : "primary"}
                onClick={() => handleNavigation("#papwalk")}
                sx={{
                  marginLeft: "1.5rem",
                  fontWeight: "700",
                }}
              >
                PAPWALK
              </Button>
            </div>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
