import { useState } from "react";
import { Typography, Stack, Box, TextField, Button } from "@mui/material";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  function handleSubscribe() {
    if (!email) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    } else {
      alert("Email is required!");
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(e.target.value);
  };

  return (
    <Box>
      <Typography align="center" variant="h4">
        Subscribe to our Weekly Newsletter
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
        }}
        alignItems="center"
        alignContent="center"
      >
        <TextField label="Email" type="text" variant="outlined"></TextField>
        <Button
          component="b"
          variant="contained"
          size="small"
          color="error"
          onClick={handleSubscribe}
          onChange={handleChange}
        >
          Subscribe
        </Button>
      </Stack>
    </Box>
  );
};

export default NewsletterSection;
