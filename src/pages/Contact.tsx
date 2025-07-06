// src/pages/Contact.tsx
import { Box, Container, Grid, Typography } from "@mui/material";
import { ContactForm } from "../components/ContactForm";
import { ContactDetails } from "../components/ContactDetails";

const Contact = () => {
  return (
    <Box py={8}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" align="center" mb={6}>
          We'd love to hear from you! Reach out with questions, feedback, or to
          start planning your dream adventure.
        </Typography>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ContactForm />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ContactDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
