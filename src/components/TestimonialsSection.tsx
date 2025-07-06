import { Box, Paper, Typography, Grid, Container } from "@mui/material";

const testimonials = [
  "Travelling with Zaph Tours was the best decision I've made this summer ~ Domani Munga",
  "This really was the best part of life ~ Saint Jhn",
  "You better lose yourself in the jungle with Zaph Tours ~ Slim Shady",
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ margin: 2 }}>
      <Container>
        <Typography variant="h4" align="center">
          What our Clients Say
        </Typography>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          {testimonials.map((testimonial, index) => (
            <Grid key={index}>
              <Paper
                elevation={3}
                sx={{ height: "100%", padding: "1rem", margin: ".6rem", p: 5 }}
              >
                {testimonial}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
