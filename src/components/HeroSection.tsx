import { Typography, Box, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: { xs: "70vh", md: "90vh" },
        backgroundImage: "url('/heroImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="md" sx={{ px: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            lineHeight: 1.2,
          }}
        >
          Explore the world with us
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
