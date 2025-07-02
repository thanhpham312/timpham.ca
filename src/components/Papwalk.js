"use client";
import React, { useRef } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@mui/material/Fab";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArchiveIcon from "@mui/icons-material/Archive";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Hooks
import useWindowSize from "@/hooks/useWindowSize";

// Components

const data = [
  {
    cover: "/videos/papwalk-overview.mp4",
    title: "PAPWALK - Overview",
  },
  {
    cover: "/videos/papwalk-play-album.mp4",
    title: "PAPWALK - Play Album",
  },
  {
    cover: "/videos/papwalk-create-playlist.mp4",
    title: "PAPWALK - Create Playlist",
  },
  {
    cover: "/videos/papwalk-add-to-playlist.mp4",
    title: "PAPWALK - Add To Playlist",
  },
];

const Papwalk = () => {
  const carouselRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { width, height } = useWindowSize();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        padding: "4rem 0 0 0",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginBottom: "0.5rem",
          }}
        >
          Introducing PAPWALK!
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            marginBottom: "1.5rem",
          }}
        >
          An audio player with a slick and modern look for Windows!
        </Typography>
        <Container
          maxWidth="md"
          sx={{
            padding: "1rem 0 2rem 0",
          }}
        >
          <Card
            sx={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: 3,
              width: "100%",
            }}
          >
            <CardMedia
              component="img"
              alt="Profile Picture"
              image="/images/papwalk.jpg"
              sx={{ objectFit: "cover" }}
            />
          </Card>
          <Typography
            variant="caption"
            component="p"
            sx={{
              padding: "1rem 0 0 0",
              textAlign: "center",
              opacity: "0.75",
            }}
          >
            PAPWALK's Albums screen with the player fully opened.
          </Typography>
        </Container>
        <Container
          sx={{
            padding: "0 0 2rem 0",
            position: "relative",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item size={{ xs: 12, sm: 3 }} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                component="a"
                href="https://github.com/thanhpham312/papwalk-build"
                target="_blank"
                sx={{
                  borderRadius: 3,
                  padding: "1rem 1.5rem",
                  backgroundColor: "#a4c9fe",
                  color: "#3a608f"
                }}
              >
                <Typography sx={{
                  margin: 0,
                  padding: 0
                }}>
                  GitHub Repository
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Typography variant="body1" color="text.secondary">
          A bit of a backstory...
          <br />
          <br />
          This summer I have become obsessed with music again. For me obsessions
          come and go and vary in staying power. However, when I hyper-fixate on
          something, it tends to become my personality for however long it
          lasts.
          <br />
          <br />
          I reacquainted myself with the library of music that I have collected
          over the years. The bulk of which was from a Xbox Music promotion a
          while back where they gave away hundred of albums in an effort to get
          more users (spoilers alert: they didn't and the rebrand didn't help).
          And so I got a bunch of MP3s that I never listen to lying around on my
          hard drive, begging me to try them even once.
          <br />
          <br />
          So I did, I sorted them all into neat little folders and browse
          through them with MPC-HC. Then it dawns on me... I no longer have a
          music app on My PC. Back in the days, I'd use Itunes, or Xbox Music
          (RIP!), or even foobar2000. Now, it's either through Spotify, YouTube,
          or some sort of streaming service. Local music is no longer a thing.
          And so I went looking for an app to manage my music collection. All it
          needs to do is fetch the music files, sort them into neat little
          categories, then allow me to play and make my own playlists; all the
          while looking decently modern. You wouldn't believe how hard of a task
          this actually is. Sure foobar2000 can do everything, but it's ugly (no
          offense) and very few people bother with making a Windows app for
          local music these days. The apps I found are either fully functionaly
          but have a dated interface, or looking slick but lacking features.
          <br />
          <br />
          That's when I wanted to make my own. But I don't want to use the
          platforms I had used before. I want it to be slick, and modern, and
          extensible, and so I chose to go with Flutter. So began 2 weeks of me
          learning Flutter and Dart, all the while reacquainting myself with
          strongly typed language again. The result of those 2 weeks is PAPWALK.
          After an extra week of tweaking and polishing, I now consider it ready
          for a beta release.
          <br />
          <br />
          The app is free and I have no desire to ever monetise it. But I also
          only plan to maintain it mainly for my own usage. As such, I'd stick
          to my own roadmap for the features to be implemented for the time
          being.
          <br />
          <br />
          If you are interested, you can download the installer or portable
          build below. The source code is on GitHub, however, I plan to only
          make the repository public once it gets out of beta (if ever). If
          you're interested in taking a look, please contact me!
        </Typography>
        <Container
          sx={{
            padding: "4rem 0 2rem 0",
            position: "relative",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item size={{ xs: 12, sm: 3 }} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<InstallDesktopIcon />}
                component="a"
                href="https://github.com/thanhpham312/papwalk-build/releases/download/v0.1.0/papwalk-v0.1.0.msix"
                download
                sx={{
                  borderRadius: 3,
                  padding: "1rem 1.5rem",
                }}
              >
                <Typography sx={{
                  margin: 0,
                  padding: 0
                }}>
                Download Installer
                </Typography>
              </Button>
            </Grid>
            <Grid item size={{ xs: 12, sm: 3 }} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ArchiveIcon />}
                component="a"
                href="https://github.com/thanhpham312/papwalk-build/releases/download/v0.1.0/papwalk-v0.1.0-windows.zip"
                download
                sx={{
                  borderRadius: 3,
                  padding: "1rem 1.5rem",
                }}
              >
                <Typography sx={{
                  margin: 0,
                  padding: 0
                }}>
                Download Portable
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container
          sx={{
            padding: "2rem 0",
            position: "relative",
          }}
        >
          <ResponsiveContainer
            key={width + "-" + height}
            carouselRef={carouselRef}
            render={(parentWidth, carouselRef) => {
              let currentVisibleSlide = 5;
              if (parentWidth <= 1440) currentVisibleSlide = 3;
              if (parentWidth <= 1080) currentVisibleSlide = 1;
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={CustomSlide}
                  slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                  carouselWidth={parentWidth}
                  data={data}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={5}
                  useGrabCursor
                />
              );
            }}
          />
          <>
            <Fab
              style={{
                position: "absolute",
                top: isMobile ? "80%" : "50%",
                left: "1.5rem",
                zIndex: 10,
              }}
              size="small"
              color="primary"
              onClick={() => {
                carouselRef.current?.goBack();
              }}
            >
              <ArrowBackIcon />
            </Fab>
            <Fab
              style={{
                position: "absolute",
                top: isMobile ? "80%" : "50%",
                right: "1.5rem",
                zIndex: 10,
              }}
              size="small"
              color="primary"
              onClick={() => {
                carouselRef.current?.goNext(6);
              }}
            >
              <ArrowForwardIcon />
            </Fab>
          </>
        </Container>
      </Container>
    </Box>
  );
};

const CustomSlide = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover, title } = data[dataIndex];

  return (
    <Card
      sx={{
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: 3,
        width: "100%",
        aspectRatio: "16 / 9",
        position: "relative",
      }}
    >
      <video
        src={cover}
        title={title}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Card>
  );
});

CustomSlide.displayName = "CustomSlide";

export default Papwalk;
