import { Box, Container, Grid, Typography } from "@mui/material";
import { tripTypes } from "../data/tripTypes";
import { TripTypesSection } from "../components/TripTypesSection";

const TripTypes = () => (
  <Box py={8} id="trip-types">
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Explore Our Trip Types
      </Typography>
      <Typography variant="subtitle1" align="center" mb={6}>
        Tailored experiences for every kind of traveler — from romance and
        relaxation to culture and adventure.
      </Typography>

      <Grid container spacing={4}>
        {tripTypes.map((trip) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={trip.title}>
            <TripTypesSection trip={trip} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default TripTypes;
