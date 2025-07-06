import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
} from "@mui/material";

const destinations = [
  {
    name: "Mt.Kenya",
    image: "/mt kenya 1.jpeg",
    description: "Mt.Kenya",
    price: "$800",
  },
  {
    name: "Mt.Ruwenzori",
    image: "/mt ruwenzori 1.jpeg",
    description: "Mt.Ruwenzori",
    price: "$800",
  },
  {
    name: "Lake Nakuru",
    image: "/lake Nakuru 1.jpeg",
    description: "Lake Nakuru",
    price: "$800",
  },
  {
    name: "Tsavo National Park",
    image: "/tsavo 1.jpeg",
    description: "Tsavo National Park",
    price: "$800",
  },
  {
    name: "Nairobi National Park",
    image: "/nairobi national park 1.avif",
    description: "Nairobi National Park",
    price: "$800",
  },
  {
    name: "Coastal Kenya",
    image: "/coastal kenya 1.jpeg",
    description: "Coastal Kenya",
    price: "$800",
  },
];

const DestinationsSection = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Featured Destinations
        </Typography>
        <Grid container spacing={4}>
          {destinations.map((destination) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={destination.name}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                />
                <CardContent>
                  <Typography variant="h6">{destination.name}</Typography>
                  <Typography variant="body2">
                    {destination.description}
                  </Typography>
                  <Typography>{destination.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DestinationsSection;
