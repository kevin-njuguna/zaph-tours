import { Box, Typography, Container } from "@mui/material";

const AboutSection = () => {
  return (
    <Box py={2} bgcolor="#f5f5f5">
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="body1" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          earum debitis, officia accusamus consequatur natus facilis alias
          veritatis ratione! Tenetur eaque illum cupiditate asperiores dolores!
          In a facere magnam laborum?
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
