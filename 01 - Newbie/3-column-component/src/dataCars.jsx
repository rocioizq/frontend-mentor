import iconSedans from "../images/icon-sedans.svg";
import iconSuv from "../images/icon-suvs.svg";
import iconLuxury from "../images/icon-luxury.svg";

export const cars = [
  {
    id: 1,
    type: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    button: "Learn more",
    className: "sedan",
    image: iconSedans,
  },
  {
    id: 2,
    type: "Suvs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    button: "Learn more",
    className: "suv",
    image: iconSuv,
  },
  {
    id: 3,
    type: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    button: "Learn more",
    className: "luxury",
    image: iconLuxury,
  },
];