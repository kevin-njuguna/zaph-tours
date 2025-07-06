import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { type TripType } from "../data/tripTypes";

type Props = {
  trip: TripType;
};

export const TripTypesSection = ({ trip }: Props) => (
  <Card sx={{ maxWidth: 345, height: "100%", boxShadow: 4, borderRadius: 3 }}>
    <CardMedia
      component="img"
      height="200"
      image={trip.image}
      alt={trip.title}
    />
    <CardContent>
      <Typography variant="h6" component="div" gutterBottom>
        {trip.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {trip.description}
      </Typography>
      <Box mt={2}>
        <Typography variant="subtitle1" color="primary">
          {trip.price}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
