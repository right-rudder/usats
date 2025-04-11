// transform this to get the info from data/programs/*.js and populate the cards
import { COMPANY_NAME } from "../../consts";

const programs = {
    upperHeading: "Explore",
    heading: "Our Training Programs",
    description:
      `Whether you're starting your aviation journey, advancing your skills, or pursuing a career in aviation, ${COMPANY_NAME} offers tailored programs for all experience levels.`,
      cards: [
        {
          title: "Professional Pilot Program (PPP)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "",
          description:
            "Take the first step toward a helicopter career with this all-in-one program for students with no prior experience.",
          link: "/helicopter-training/professional-pilot-program",
        },
        {
          title: "Private Pilot License (PPL)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "",
          description:
            "Begin your helicopter flying journey by earning your private pilot license and learning essential flight skills.",
          link: "/helicopter-training/private-pilot-license",
        },
        {
          title: "Instrument Rating (IR)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "",
          description:
            "Learn to safely navigate helicopters in low-visibility conditions using only instruments.",
          link: "/helicopter-training/instrument-rating",
        },
        {
          title: "Commercial Pilot License (CPL)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "",
          description:
            "Advance your helicopter career by obtaining the certification required to fly professionally.",
          link: "/helicopter-training/commercial-pilot-license",
        },
        {
          title: "Certified Flight Instructor (CFI)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "",
          description:
            "Become a helicopter flight instructor to build flight time while training new pilots.",
          link: "/helicopter-training/certified-flight-instructor",
        },
        {
          title: "Certified Flight Instructor Instrument (CFII)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "",
          description:
            "Expand your teaching credentials by training pilots in instrument flight operations.",
          link: "/helicopter-training/certified-flight-instructor-instrument",
        },
        {
          title: "ATP-L",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "",
          description:
            "Earn the highest helicopter certification available and qualify to pilot multi-crew IFR operations.",
          link: "/helicopter-training/atp-l",
        },
      ],
  };
  
  export default programs;
  