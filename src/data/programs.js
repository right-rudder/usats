// transform this to get the info from data/programs/*.js and populate the cards
import { COMPANY_NAME } from "../../../consts";

const programs = {
    upperHeading: "Explore",
    heading: "Our Training Programs",
    description:
      `Whether you're starting your aviation journey, advancing your skills, or pursuing a career in aviation, ${COMPANY_NAME} offers tailored programs for all experience levels.`,
    cards: [
      {
        title: "Profissional Pilot Program (PPP)",
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        description:
          "Take the first step toward becoming a pilot with our comprehensive Profissional Pilot Course.",
        link: "/airplane-training/professional-pilot-program",
      },
    ],
  };
  
  export default programs;
  