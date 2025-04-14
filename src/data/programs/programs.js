// transform this to get the info from data/programs/*.js and populate the cards
import { COMPANY_NAME } from "../../consts";

const programs = {
    upperHeading: "Explore",
    heading: "Our Airplane Training Programs",
    description:
      `Whether you're starting your aviation journey, advancing your skills, or pursuing a career in aviation, ${COMPANY_NAME} offers tailored programs for all experience levels.`,
      cards: [
        {
          title: "Professional Pilot Program (PPP)",
          imagePath: "/src/assets/USATS_banner_Application.webp",
          imageAlt: "",
          description:
            "Take the first step toward becoming a pilot with our comprehensive Professional Pilot Course.",
          link: "/airplane-training/professional-pilot-program",
        },
        {
          title: "Private Pilot License (PPL)",
          imagePath: "/src/assets/USATS_Plane_N3544W.webp",
          imageAlt: "",
          description:
            "Start your aviation journey by learning to fly for recreation or as the first step toward a flying career.",
          link: "/airplane-training/private-pilot-license",
        },
        {
          title: "Instrument Rating (IR)",
          imagePath: "/src/assets/ALO_NG_INTERIOR.webp",
          imageAlt: "",
          description:
            "Enhance your skills by learning to fly solely using instruments, preparing you for complex weather conditions.",
          link: "/airplane-training/instrument-rating",
        },
        {
          title: "Commercial Pilot License (CPL)",
          imagePath: "/src/assets/ALTO_NG_Panel.jpg",
          imageAlt: "",
          description:
            "Advance your career with professional training that prepares you to fly commercially and meet industry standards.",
          link: "/airplane-training/commercial-pilot-license",
        },
        {
          title: "Certified Flight Instructor (CFI)",
          imagePath: "/src/assets/Happy_Landings_ALO_NG.webp",
          imageAlt: "",
          description:
            "Become a flight instructor and start teaching others to fly while gaining valuable experience and flight hours.",
          link: "/airplane-training/certified-flight-instructor",
        },
        {
          title: "Certified Flight Instructor Instrument (CFII)",
          imagePath: "/src/assets/placeholder.webp",
          imageAlt: "",
          description:
            "Specialize in instrument flight instruction and train students to navigate and fly safely in low-visibility conditions.",
          link: "/airplane-training/certified-flight-instructor-instrument",
        },
      ],
      
  };
  
  export default programs;
  