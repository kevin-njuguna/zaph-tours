export type TripType = {
  title: string;
  image: string;
  description: string;
  price: string;
};

export const tripTypes: TripType[] = [
  {
    title: "Honeymoon Safaris",
    image: "/honeymoon safari.jpeg",
    description:
      "Romantic safaris in exclusive lodges with private game drives, candle-lit dinners under the stars, and unforgettable experiences tailored for couples.",
    price: "$2,500 per couple (includes 3 nights)",
  },
  {
    title: "Family Adventures",
    image: "/family adventure.jpg",
    description:
      "Fun-filled tours perfect for all ages with kid-friendly accommodations, educational experiences, and wildlife sightings.",
    price: "$1,800 per family (2 adults + 2 children)",
  },
  {
    title: "Cultural Tours",
    image: "/cultural tours.jpeg",
    description:
      "Engage with local tribes, traditional music, art, and cuisine. Experience Kenya’s diverse heritage firsthand.",
    price: "$950 per person",
  },
  {
    title: "Adventure Expeditions",
    image: "/adventure expeditions.jpeg",
    description:
      "Adrenaline-pumping hikes, rafting, and rugged safaris for thrill-seekers who want to explore off the beaten path.",
    price: "$1,200 per person",
  },
  {
    title: "Wildlife Safaris",
    image: "/wildlife safari.jpeg",
    description:
      "Get up close to the Big Five with expert guides in iconic national parks and conservancies.",
    price: "$1,000 per person",
  },
  {
    title: "Beach Holidays",
    image: "/beach holiday.jpeg",
    description:
      "Sunbathe on pristine beaches in Diani, Watamu, and Lamu with water sports and island hopping.",
    price: "$1,100 per person",
  },
];
