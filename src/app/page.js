import { Container } from "@mui/material";

// Components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Papwalk from "@/components/Papwalk";
import Bonus from "@/components/Bonus";

export default function Home() {
  return (
    <div>
      <Hero />
      <Container
        sx={{
          position: "relative",
        }}
      >
        <span
          id="about"
          style={{
            position: "absolute",
            top: "-2rem",
          }}
        />
      </Container>
      <About />
      <Container
        sx={{
          position: "relative",
        }}
      >
        <span
          id="papwalk"
          style={{
            position: "absolute",
            top: "-2rem",
          }}
        />
      </Container>
      <Papwalk />
      <Container
        sx={{
          position: "relative",
        }}
      >
        <span
          id="bonus"
          style={{
            position: "absolute",
            top: "-2rem",
          }}
        />
      </Container>
      <Bonus />
    </div>
  );
}
