// src/components/ContactDetails.tsx
import { Box, Typography, Stack, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

export const ContactDetails = () => (
  <Stack spacing={4}>
    <Box>
      <Typography variant="h5" gutterBottom>
        Contact Information
      </Typography>
      <Typography>
        Email: <Link href="mailto:info@zaphtours.com">info@zaphtours.com</Link>
      </Typography>
      <Typography>
        Phone: <Link href="tel:+254712345678">+254 712 345 678</Link>
      </Typography>
      <Typography>Address: Nairobi, Kenya</Typography>
    </Box>

    <Box>
      <Typography variant="h5" gutterBottom>
        Office Hours
      </Typography>
      <Typography>Monday - Friday: 8:00 AM - 6:00 PM</Typography>
      <Typography>Saturday: 9:00 AM - 1:00 PM</Typography>
      <Typography>Sunday: Closed</Typography>
    </Box>

    <Box>
      <Typography variant="h5" gutterBottom>
        Our Location
      </Typography>
      <Box
        sx={{ width: "100%", height: 300, borderRadius: 2, overflow: "hidden" }}
      >
        <iframe
          title="Zaph Tours Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.021982507014!2d36.8219469!3d-1.2920657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f0b3b8493f%3A0x3d179b6e4b585bc1!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1688579403910"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />
      </Box>
    </Box>

    <Box>
      <Typography variant="h5" gutterBottom>
        Follow Us
      </Typography>
      <Stack direction="row" spacing={2}>
        <IconButton href="https://facebook.com/zaphtours" target="_blank">
          <Facebook />
        </IconButton>
        <IconButton href="https://instagram.com/zaphtours" target="_blank">
          <Instagram />
        </IconButton>
        <IconButton href="https://twitter.com/zaphtours" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton href="https://linkedin.com/zaphtours" target="_blank">
          <LinkedIn />
        </IconButton>
      </Stack>
    </Box>
  </Stack>
);
