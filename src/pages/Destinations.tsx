import { Box, Typography, Grid, Container } from "@mui/material";
import { DestinationCard } from "../components/DestinationCard";
import { destinations } from "../data/destinations";

const Destinations = () => {
  return (
    <Box py={8}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom align="center">
          Explore our destinations
        </Typography>
      </Container>
      <Grid container spacing={4}>
        {destinations.map((destination) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={destination.name}>
            <DestinationCard {...destination} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Destinations;
