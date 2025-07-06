import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

interface DestinationProps {
  image: string;
  name: string;
  description: string;
  pricePerGroup: string;
  individualCost: string;
}

export const DestinationCard = ({
  image,
  name,
  description,
  pricePerGroup,
  individualCost,
}: DestinationProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            <strong>{pricePerGroup}</strong>
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Individual Cost: <strong>{individualCost}</strong>
          </Typography>
        </Box>
        <Box mt={2}>
          <Button variant="outlined" color="primary" href="#">
            Learn More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
